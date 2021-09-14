import { useState } from "react";
import axiosInstance from "../../../utils/axios_instance";
import { useRouter } from "next/router";

//Componentes
import ResetPasswordForm from "../ResetPasswordForm";
import ResetPasswordSuccess from "../ResetPasswordSuccess";
import ResetPasswordError from "../ResetPasswordError";

const useHandleResponseRequest = () => {
    const [passwordMatch, setPasswordMatch] = useState(true);//Guarda el estado de la contraseñas, si hacen match o no.
    const [switchSection, setSwitchSection] = useState('resetPasswordForm'); //Guarda el estado de cual section mostrar al restablecer la contraseña.
    const [isLoadingRequest, setIsLoadingRequest] = useState(false); //Si la peticion esta cargando.
    const router = useRouter(); //Accede al router de la app.

    let sectionResetPassword;//Guarda el componente a mostrar.

    //Manejador para el formulario de restablecer contraseña.
    const handleOnSubmit = (data) => {
        setIsLoadingRequest(true)
        const { newPassword, reapetPassword } = data;

        if ( reapetPassword !== newPassword ) {
            setPasswordMatch(false);
            setIsLoadingRequest(false);
        } else {
            setPasswordMatch(true);
            const { token } = router.query; //Obtiene el parametro "token" de la peticion.

            /*Hace una peticion post al enpoint para enviar la nueva contraseña introducida por el usuario.
            En esta se envia el token obtenido por el correo de restablecer contraseña y la nueva contraseña, todo por los headers. */
            axiosInstance.post('/autenticacion/confirmar_contrasena', {
                message: 'Peticion al backend para restablecer contraseña'
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'contrasena': newPassword
                }
            })
            .then((res) => {
                setIsLoadingRequest(false);
                //Si se resuelve correctamente, se muestra el componente de "contraseña restablecida correctamente"
                if (res.status == 200 && res.data.status) {
                    setSwitchSection('resetPasswordSuccess');
                }
            })
            .catch((error) => {
                //Se muestra un componente con error y posibles soluciones.
                if (error) {
                    setSwitchSection('resetPasswordError')
                }
            })
        } 
    }

    //Elige cual componente mostrar finalmente.
    switch (switchSection) {
        case 'resetPasswordSuccess':
            sectionResetPassword = <ResetPasswordSuccess/>
            break;
        case 'resetPasswordError':
            sectionResetPassword = <ResetPasswordError/>
            break;
        case 'resetPasswordForm':
            sectionResetPassword = <ResetPasswordForm 
                handleOnSubmit={handleOnSubmit}
                passwordMatch={passwordMatch}
                isLoadingRequest={isLoadingRequest}/>
            break;
        default:
            sectionResetPassword = <ResetPasswordForm/>
            break;
    }

    return [sectionResetPassword]
}

export default useHandleResponseRequest;