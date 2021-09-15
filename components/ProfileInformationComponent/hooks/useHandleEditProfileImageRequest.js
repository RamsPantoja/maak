import { useState } from "react";
import axiosInstance from "../../../utils/axios_instance";
import Snackbar from "../../SnackbarComponent/Snackbar";
import { useSnackbar } from "notistack";

const useHandleEditProfileImageRequest = (user, setProfileData, handleShowModal) => {
    const [isLoadingRequest, setIsLoadingRequest] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleOnUpdateImage = (file) => {
        setIsLoadingRequest(true);
        const formData = new FormData(); //Crear un objeto FormData
        formData.append('imagen', file) //Agrega el archivo seleccionado por el usuario al formData.

        /*Realiza la peticion por metodo PUT al endpoint junto con el parametro usuario, el cual es proporcionado
        desde el parametro del hook. y se le pasa el formData como segundo parametro al metodo PUT de axios.*/
        axiosInstance.put(`/perfil/imagen/perfil?usuario=${user}`, formData)
        .then((res) => {
            if (res.status == 200 && res.data.status) {
                setIsLoadingRequest(false);

                //Obtiene de la respuesta a la peticion, la propiedad imagenPerfil, la cual es el link a la imagen.
                const {
                    imagenPerfil
                } = res.data.data[0];
               
                //Actualiza el estado de los datos de perfil.
                //Pasa todos los valores y solo actualizamos la propiedad imagenPerfil
                setProfileData(prevProfileData => ({
                    ...prevProfileData,
                    imagenPerfil
                }));

                handleShowModal('noModal'); //Cierra el modal de "Actualizar imagen de perfil"

                //Muestra el snackbar de tipo "Success"
                enqueueSnackbar('', {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'success'} message={'Imagen actualizada correctamente'}/>
                        )
                    }
                })
            }
        })
        .catch((error) => {
            setIsLoadingRequest(false)
            if (error.response !== undefined) {
                /*Si existe algun error en el proceso de actulizacion de la imagen.*/
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
                //Si existe algun error con el recurso solicitado, pero la api responde.
                } else if (error.response.data.error) {
                    enqueueSnackbar('', {
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'right'
                        },
                        // eslint-disable-next-line react/display-name
                        content: () => {
                            return (
                                <Snackbar variant={'error'} message={'Error al actualizar la imagen'}/>
                            )
                        }
                    })
                }
            //Error si la api no response a la peticion. 
            } else {
                enqueueSnackbar('', {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'error'} message={'Error al actualizar la imagen'}/>
                        )
                    }
                })
            }
        })
    }

    return {
        handleOnUpdateImage,
        isLoadingRequest
    }
}

export default useHandleEditProfileImageRequest;