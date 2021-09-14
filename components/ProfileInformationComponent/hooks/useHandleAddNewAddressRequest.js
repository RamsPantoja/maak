import { useState } from "react";
import axiosInstance from "../../../utils/axios_instance";
import Snackbar from "../../SnackbarComponent/Snackbar";
import { useSnackbar } from "notistack";

//Hook para manejar las peticiones de agregar direcciones.
const useHandleAddNewAddressRequest = (user, handleShowModal, setAddressData, addressData) => {
    const [isLoadingRequest, setIsLoadingRequest] = useState(false); //Variable para saber si la peticion esta cargando.
    const { enqueueSnackbar } = useSnackbar(); //Accede al objeto de notificacion tipo snackbar

    //Ejecuta la peticion al endpoint y le pasa por parametro el usuario que desea agregar la direccion.
    const handleOnSubmit = (data) => {
        setIsLoadingRequest(true);
        axiosInstance.post(`/direccion?usuario=${user}`, data)
        .then((res) => {
            setIsLoadingRequest(false); //Avisa si la peticion termino de cargar.
            handleShowModal('noModal'); //Cierra el modal si la peticion se realizo correctamente.
            if (res.status == 200 && res.data.status) {
                //Actualizo las direcciones con las anteriores y la nueva.
                setAddressData([...addressData, res.data.data[0]]);
                enqueueSnackbar('', {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'success'} message={'Dirección agregada correctamente'}/>
                        )
                    }
                })
            }
        })
        .catch((error) => {
            setIsLoadingRequest(false); //Avisa si la peticion termino de cargar.

            if (error.response !== undefined) {
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
                } else if (error.response.data.error) {
                    enqueueSnackbar('', {
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'right'
                        },
                        // eslint-disable-next-line react/display-name
                        content: () => {
                            return (
                                <Snackbar variant={'error'} message={'Error al agregar la nueva dirección'}/>
                            )
                        }
                    })
                }
            } else {
                enqueueSnackbar('', {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'error'} message={'Error al agregar la nueva dirección'}/>
                        )
                    }
                })
            }
        })
    }

    return {
        isLoadingRequest,
        handleOnSubmit
    }
}

export default useHandleAddNewAddressRequest;