import { useSession } from "next-auth/client";
import { useSnackbar } from "notistack";
import { useState } from "react";
import axiosInstance from "../../../utils/axios_instance";
import Snackbar from "../../SnackbarComponent/Snackbar";

const useHandleEditAccountDataRequest = (setAccountData) => {
    const [session, loading] = useSession(); //Obtiene la session del usuario.
    const { enqueueSnackbar } = useSnackbar();//Accede al objeto Snackbar de la liberia notistack.
    const [isLoadingRequest, setIsLoadingRequest] = useState(false); //Variable de estado para indicar que la peticion esta en curso.

    const handleOnSubmit = async (data) => {
        setIsLoadingRequest(true);

        /*Se realiza la peticion tipo PUT al endpoint especificado.
        A este endpoint se le pasa como parametro "usuario" el email del usuario logeado.*/
        axiosInstance.put(`/cuenta?usuario=${session.user.email}`, data)
        .then((res) => {
            setIsLoadingRequest(false);
            //Si se realiza correctamente la peticion, salta un snackbar con un mensaje tipo "success".
            if (res.status == 200 && res.data.status) {
                
                const {
                    nombre,
                    apellidos,
                    rfc,
                    telefonoCelular,
                    telefonoFijo
                } = res.data.data[0];
                /*Esta funcion actualiza los datos previamente obtenidos de la api o los previamente introducidos por el usaurio,
                 con los datos proporcionados por el usuario, con el fin de realizar un ambiente de actualizacion en tiempo real. */
                setAccountData((prevAccountData) => ({
                    ...prevAccountData,
                    nombre,
                    apellidos,
                    rfc,
                    telefonoCelular,
                    telefonoFijo
                }));
                
                enqueueSnackbar('', {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'success'} message={res.data.mensaje[0]}/>
                        )
                    }
                })
            }
        })
        //Cualquier error, es manejado aqui.
        .catch((error) => {
            setIsLoadingRequest(false)
            if (error.response.data.status === false) {
                enqueueSnackbar('', {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'error'} message={error.response.data.mensaje[0]}/>
                        )
                    }
                })
            } else {
                enqueueSnackbar('', {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'error'} message={'Error al actualizar los datos'}/>
                        )
                    }
                })
            }
        })
        
    }

    return {
        handleOnSubmit,
        isLoadingRequest
    }   
}


export default useHandleEditAccountDataRequest;