import { useState } from "react";
import axiosInstance from "../../../utils/axios_instance";
import Snackbar from "../../SnackbarComponent/Snackbar";
import { useSnackbar } from "notistack";

//Manejador para eliminar una direccion solicitada por el usuario.
const useHandleDeleteAddressRequest = (user, handleShowModal, setAddressData, addressData, addressId) => {
    const [isLoadingRequest, setIsLoadingRequest] = useState(false); //Variable para saber si la peticion esta cargando.
    const { enqueueSnackbar } = useSnackbar(); //Accede al objeto de notificacion tipo snackbar

    //Ejecuta la peticion al endpoint y se le para como parametro el usuario y el id de la direccion a eliminar.
    const handleOnSubmit = () => {
        setIsLoadingRequest(true);
        axiosInstance.delete(`/direccion?usuario=${user}&direccion=${addressId}`)
        .then((res) => {
            setIsLoadingRequest(false); //Avisa si la peticion termino de cargar.
            handleShowModal('noModal'); //Cierra el modal, si se elimina correctamente la direccion.

            if (res.status == 200 && res.data.status) {
                //Filtra todas las direcciones que no se desean eliminar.
                const newAddress = addressData.filter((address) => address.numDireccion !== addressId);
                //Actualizamos las direcciones con las que no se eliminaron.
                setAddressData(newAddress);
                
                enqueueSnackbar('', {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'success'} message={'Dirección eliminada correctamente'}/>
                        )
                    }
                })
            }
        })
        .catch((error) => {
            setIsLoadingRequest(false);

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
                                <Snackbar variant={'error'} message={'Error al eliminar la dirección'}/>
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
                            <Snackbar variant={'error'} message={'Error al eliminar la dirección'}/>
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

export default useHandleDeleteAddressRequest;