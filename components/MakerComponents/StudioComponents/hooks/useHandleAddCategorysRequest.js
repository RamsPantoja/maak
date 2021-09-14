import { useState } from "react";
import axiosInstance from "../../../../utils/axios_instance";
import { useSnackbar } from "notistack";
import Snackbar from "../../../SnackbarComponent/Snackbar";

const useHandleAddCategorysRequest = (user) => {
    const [isLoadingRequest, setIsLoadingRequest] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handlerRequest = (data) => {
        setIsLoadingRequest(true)
        console.log(data);
        axiosInstance.post(`/estudio/categorias?usuario=${user}`, {
            "categorias": {
                "Mascotas": data.mascotas,
                "Sustentabilidad": data.sustentabilidad,
                "Juguetes": data.juguetes,
                "Objetos Inteligentes": data.objetosInteligentes,
                "Decoración": data.decoracion,
                "Cuidado Personal": data.cuidadoPersonal,
                "Accesorios": data.accesorios,
                "Textiles": data.textiles,
                "Calzado": data.calzado,
                "Movilidad": data.movilidad,
                "Lamparas": data.lamparas,
                "Mobiliario": data.mobiliario,
                "Artesanias": data.artesanias,
                "Electrónicos": data.electronicos,
                "Joyería": data.joyeria,
                "Portables": data.portables
            }
        })
        .then((res) => {
            setIsLoadingRequest(false);

            if (res.status == 200 && res.data.status) {
                enqueueSnackbar('', {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'success'} message={'Categorías actualizadas correctamente'}/>
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
                                <Snackbar variant={'error'} message={'Error al actualizar las categorías'}/>
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
                            <Snackbar variant={'error'} message={'Error al actualizar las categorías'}/>
                        )
                    }
                })
            }
        })
    }

    return {
        isLoadingRequest,
        handlerRequest
    }
}

export default useHandleAddCategorysRequest;