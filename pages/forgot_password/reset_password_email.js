import React from 'react';
import styles from './styles/reset_password_email.module.css'
import { particles } from '../../utils/particles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axiosInstance from '../../utils/axios_instance';
import { useSnackbar } from 'notistack';
import { useState } from 'react';

//Componentes
import LayoutSign from '../../components/layout/LayoutSign';
import Head from 'next/head';
import Particles from 'react-particles-js';
import MainButton from '../../components/ButtonsComponent/MainButton';
import Snackbar from '../../components/SnackbarComponent/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';

const ResetPasswordEmail = () => {
    const router = useRouter(); //accede al router de la app.
    const { email } = router.query; //obtiene el email por el parametro email del request.
    const { enqueueSnackbar } = useSnackbar(); //Accede al objeto nitisack.
    const [isLoadingRequest, setIsLoadingRequest] = useState(false);    

    //Manejador para reenviar el correo de restablecer contraseña.
    const handleOnClickresendEmail = () => {
        setIsLoadingRequest(true)
        /*Hace una peticion por POST al endpoint enviando como parametro el email del usuario.*/
        axiosInstance.post(`/autenticacion/reestablecer_contrasena?usuario=${email}`)
        .then((res) => {
            setIsLoadingRequest(false)
            //Si se resuelve correctamente, se le notifica al usuario con un snackbar en la parte inferior-derecha.
            if (res.status == 200 && res.data.status === true) {
                enqueueSnackbar('',{
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'success'} message={'Correo para restablecer contraseña, enviado.'}/>
                        )
                    }
                });
            }
        })
        .catch((error) => {
            setIsLoadingRequest(false)
            //Si la api responde con un error, se le notifica al usuario con un snackbar.
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
                //Si no se puede establecer una conexion con la api, se le notifica al usuario con un snackbar.
                enqueueSnackbar('',{
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'error'} message={'Error al enviar el correo'}/>
                        )
                    }
                });
            }
        })
    }

    return (
        <LayoutSign>
            <Head>
                <title>R3D - Email restablecer contraseña</title>
            </Head>
            <div className={styles.resetPasswordEmail_container}>
                <Particles
                params={particles}
                className={styles.resetPasswordEmail_particles}/>
                <div className={styles.resetPasswordEmail_card}>
                    <div className={styles.resetPasswordEmail_card_grid}>
                        <h4>CORREO ENVIADO</h4>
                        <p>Te hemos enviado un correo para que puedas elegir tu nueva contraseña.</p>
                        <p className={styles.resetPasswordEmail_card_grid_p2}>¿No has recibido el correo?</p>
                        <span>Te sugerimos revisar tu bandeja de spam</span>
                        {   isLoadingRequest ? <div className={styles.circularProgress_center}><CircularProgress size={47} style={{color: '#e6e6e6'}}/></div>
                                : <button className={styles.resetPasswordEmail_card_grid_button} onClick={handleOnClickresendEmail}>VOLVER A ENVIAR</button>
                        }
                        <div className={styles.resetPasswordEmail_card_grid_button_signIn} onClick={() => router.push('/sign_in')}>
                            <MainButton name={'INICIAR SESIÓN'}/>
                        </div>
                        <p>¿Tienes problemas para restablecer tu contraseña?</p>
                        <Link href='/about/support'><a>Soporte</a></Link>
                    </div>
                </div>
            </div>
        </LayoutSign>
    )
}

export default ResetPasswordEmail;