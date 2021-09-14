import React, { useState } from 'react'
import { particles } from '../utils/particles';
import styles from './styles/forgot_password.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import axiosInstance from '../utils/axios_instance';

//Componentes
import FormInput from '../components/FormInputComponent/FormInput';
import Particles from 'react-particles-js';
import LayoutSign from '../components/layout/LayoutSign';
import Head from 'next/head';
import MainButton from '../components/ButtonsComponent/MainButton';
import Snackbar from '../components/SnackbarComponent/Snackbar';


//Schema de validation para el formulario de forgotPassword.
const emailValidationSchema = yup.object().shape({
    email: yup.string().required(),
});

const ForgotPassword = () => {
    const router = useRouter(); //Accede al router de la app.
    const [isLoadingRequest, setIsLoadingRequest] = useState(false);
    const { enqueueSnackbar } = useSnackbar(); //Accede al objeto nitisack.

    /*useForm permite implementar un manejador de formularios para una buena optimizacion de renderizado.
    Este hook viene de la libreria react-hook-form, la cual es muy buena para la administracion de formularios.
    ref: https://react-hook-form.com */
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(emailValidationSchema)
    });

    //Hace una peticion POST al endpoint y enviada el email introducido por el usuario, como parametro.
    const handleOnSubmit = (data) => {
        setIsLoadingRequest(true)
        axiosInstance.post(`/autenticacion/reestablecer_contrasena?usuario=${data.email}`)
        .then((res) => {
            /*Si la peticion se resuelve correctamente, el usuario es redigirdo a una pantalla donde se le indica que se la enviado un correo
            para poder establecer su contraseña. */
            if (res.status == 200 && res.data.status) {
                setIsLoadingRequest(false);
                router.push(`/forgot_password/reset_password_email?email=${data.email}`);
            }
        })
        .catch((error) => {
            setIsLoadingRequest(false);
            //Errores lanzados por la api.
            if (error.response.data.status === false) {
                enqueueSnackbar('',{
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
                });
            } else {
                //Error general si no se puede hacer una conexion hacia la api.
                enqueueSnackbar('',{
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'error'} message={'Error al enviar el email'}/>
                        )
                    }
                });
            }
        })
    }

    return (
        <LayoutSign>
            <Head>
                <title>R3D - Olvidé contraseña</title>
            </Head>
            <div className={styles.forgotPassword_container}>
                <Particles
                params={particles}
                className={styles.forgotPassword_particles}/>
                <div className={styles.forgotPassword_card}>
                    <div className={styles.forgotPassword_card_grid}>
                        <h4>RESTABLECER CONTRASEÑA</h4>
                        <p>Te enviaremos un email con instrucciones sobre cómo restablecer tu contraseña.</p>
                        <form className={styles.forgotPassword_card_form} onSubmit={handleSubmit(handleOnSubmit)}>
                            <FormInput register={register} label={'Correo Electrónico'} field={'email'} type={'email'} error={errors?.email}/>
                            <MainButton isLoadingRequest={isLoadingRequest} name={'ENVIAR'}/>
                        </form>
                        <Link href='/sign_in'><a>Regresar a inicio sesión</a></Link>
                    </div>
                </div>
            </div>
        </LayoutSign>
    )
}

export default ForgotPassword;