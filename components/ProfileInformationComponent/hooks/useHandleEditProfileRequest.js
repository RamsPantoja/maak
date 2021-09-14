import axiosInstance from '../../../utils/axios_instance';
import { useSession } from 'next-auth/client';
import { useSnackbar } from 'notistack';
import Snackbar from '../../SnackbarComponent/Snackbar';
import { useState } from 'react';

const useHandleEditProfileRequest = (handleShowModal, setProfileData) => {
    const [session, loading] = useSession(); //Obtiene la session del usuario.
    const { enqueueSnackbar } = useSnackbar();//Accede al objeto Snackbar de la liberia notistack.
    const [isLoadingRequest, setIsLoadingRequest] = useState(false); //Variable de estado para indicar que la peticion esta en curso.


    /*Manejador para enviar el formulario al api, este recibe el parametro "data" el cual lleva los datos
    capturados de los inputs*/
    const handleOnSubmit = async (data) =>  {
        setIsLoadingRequest(true);

        //Crea un objeto de los datos obtenidos del formulario para ser enviado al backend.
        const dataObject = await new Promise((resolve, rejects) => {
            try {
                const newObject = {
                    descripcion: data.descripcion,
                    empresa: data.empresa,
                    ubicacion: data.ubicacion,
                    nombre: data.nombre,
                    ocupacion: data.ocupacion,
                    enlacesContacto: {
                        linkedin: data.linkedInLink,
                        instagram: data.instagramLink,
                        facebook: data.facebookLink,
                        twitter: data.twitterLink,
                        sitioWeb: data.paginaweb
                    }
                } 
                resolve(newObject);
            } catch (error) {
                if (error) {
                    rejects(null)
                }
            }
        });

        /*Si se crea correctamente el dataObject que lleva todos los datos para ser enviados al backend, entonces, se realiza la peticion tipo PUT al endpoint especificado.
        A este endpoint se le pasa como parametro "usuario" el email del usuario logeado.*/
        if (dataObject) {
            axiosInstance.put(`/perfil?usuario=${session.user.email}`, dataObject)
            .then((res) => {
                setIsLoadingRequest(false);
                //Si la se realiza correctamente la peticion, salta un snackbar con un mensaje tipo "success".
                if (res.status == 200 && res.data.status) {
                    handleShowModal('noModal'); //Cierra el modal de "EditarProfile" cuando se realiza correctamente el cambio de datos.
                    const {
                        descripcion,
                        empresa,
                        ubicacion,
                        nombre,
                        ocupacion,
                        enlacesContacto,
                    } = res.data.data[0]
                    /*Esta funcion actualiza el estado de los datos previamente obtenidos de la api con los nuevos datos introducidos por el usuario,
                    con estp se simula un ambiente de actulizacion de datos en tiempo real.
                    Estos datos son los que se muestran en la informacion basica del perfil y en el formulario de EditarPerfil. */
                    setProfileData(prevProfileData => ({
                        ...prevProfileData,
                        descripcion,
                        empresa,
                        ubicacion,
                        nombre,
                        ocupacion,
                        enlacesContacto
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
        
    }

    return {
        handleOnSubmit,
        isLoadingRequest
    }
}

export default useHandleEditProfileRequest;