import React, { useContext, useState } from 'react';
import styles from './styles/ContactInformationProfile.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactInformationValidationSchema } from './ContactInformationValidationSchema';
import axiosInstance from '../../utils/axios_instance';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

//Componentes
import FormInputGlass from '../FormInputComponent/FormInputGlass';
import MainButtonProfile from '../ButtonsComponent/MainButtonProfile';
import Snackbar from '../SnackbarComponent/Snackbar';

const inputs = [
    {
        label: 'Nombre*',
        field: 'nombre',
        type: 'text'
    },
    {
        label: 'Empresa',
        field: 'empresa',
        type: 'text'
    },
    {
        label: 'Ocupación*',
        field: 'ocupacion',
        type: 'text'
    },
    {
        label: 'Ubicación*',
        field: 'ubicacion',
        type: 'text'
    }
]

const ContactInformationProfile = ({distanceX, imageFile, typeOfProfile, session}) => {
    const [isLoadingRequest, setIsLoadingRequest] = useState(false);
    const router = useRouter(); //Accede al router de la app.
    const { enqueueSnackbar } = useSnackbar();

    /*useForm permite implementar un manejador de formularios para una buena optimizacion de renderizado.
    Este hook viene de la libreria react-hook-form, la cual es muy buena para la administracion de formularios.
    ref: https://react-hook-form.com */
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(contactInformationValidationSchema)
    })

    //Manejador para enviar los datos al backend y terminar con el proceso "seleccionar perfil".
    const handleOnSubmitCreateNewProfile = (data) => {
        setIsLoadingRequest(true);
        //Crea un formData para ser enviado a la Api.
        const formData = new FormData();
        formData.append('imagen', imageFile);
        formData.append('perfil', typeOfProfile);
        //Itera las keys dentro del parametro "data", para agregarlas al formData.
        Object.keys(data).some((key) => {
            formData.append(key, data[key]);
        });

        //Hace la peticion tipo post al endpoint para enviar los datos.
        if (formData) {
            axiosInstance.post(`/perfil/establecer?usuario=${session.user.email}`, formData)
            .then((res) => {
                setIsLoadingRequest(false);
                if (res.status == 200 && res.data.status) {
                    localStorage.setItem('profileRegistered', 'true');
                    localStorage.setItem('profile', typeOfProfile)
                    router.push('/r3d/my_profile');
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
                                    <Snackbar variant={'error'} message={'No se puede crear el perfil'}/>
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
                                <Snackbar variant={'error'} message={'No se puede crear el perfil'}/>
                            )
                        }
                    })
                }
            })
        }
        
    }

    return (
        <div className={styles.contactInformationProfile} style={{transform: `translateX(${distanceX}%)`}}>
            <div className={styles.contactInformationProfile_description}>
                <h2>Agregar Información de contacto</h2>
                <form className={styles.contactInformationProfile_form} onSubmit={handleSubmit(handleOnSubmitCreateNewProfile)}>
                    { inputs.map((input, index) => {
                        return (
                            <div key={index} className={styles.contactInformationProfile_input}>
                                <FormInputGlass
                                register={register}
                                label={input.label} 
                                field={input.field} 
                                type={input.type}
                                error={errors?.[input.field]}/>
                            </div>
                        )
                    })}
                    <div className={styles.contactInformationProfile_submitButton}>
                        <MainButtonProfile isLoadingRequest={isLoadingRequest} name={'Crear perfil'}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactInformationProfile;