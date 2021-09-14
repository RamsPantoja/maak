import { useSnackbar } from "notistack";
import { useState } from "react";
import axiosInstance from "../../../utils/axios_instance";
import Snackbar from "../../SnackbarComponent/Snackbar";

//Manejador para editar una direccion selecionada por el usuario.
const useHandleEditAddressRequest = (user, handleShowModal, setAddressData, addressData, addressId) => {
    const [isLoadingRequest, setIsLoadingRequest] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    //Realiza una peticion al endpoint y se le pasa por parametros, el usuario que desea eliminar la direccion y el id de la direccion.
    const handleOnSubmit = (data) => {
        setIsLoadingRequest(true);
        axiosInstance.put(`/direccion?usuario=${user}&direccion=${addressId}`, data)
        .then((res) => {
            setIsLoadingRequest(false);
            handleShowModal('noModal'); //Cierra el modal cuando se realiza correctamente la peticion.
            if (res.status == 200 && res.data.status) {
                //Obtiene la posicion de la direccion a editar.
                const addressMatch = addressData.findIndex((address) => address.numDireccion == addressId);
                //Remplaza la direccion con la direccion editada en la posicion de la direccion previa.
                addressData[addressMatch] = res.data.data[0];
                //Actualiza las direcciones.
                setAddressData([...addressData]);
                enqueueSnackbar('', {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'success'} message={'Dirección editada correctamente'}/>
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
                                <Snackbar variant={'error'} message={'Error al editar la dirección'}/>
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
                            <Snackbar variant={'error'} message={'Error al editar la dirección'}/>
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

export default useHandleEditAddressRequest;