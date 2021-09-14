import React, { useState } from 'react';
import Particles from 'react-particles-js';
import { particles } from '../../utils/particles';
import styles from './styles/confirmation_email.module.css';
import { useRouter } from 'next/router';
import axiosInstance from '../../utils/axios_instance';
import { useSnackbar } from 'notistack';

//Componentes
import LayoutSign from '../../components/layout/LayoutSign';
import Snackbar from '../../components/SnackbarComponent/Snackbar';
import Head from 'next/head';
import MainButton from '../../components/ButtonsComponent/MainButton';

//Pagina de confirmacion de correo electronico.
const ConfirmationEmail = () => {
    //Accede al objeto router de la app.
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();//Accede al objeto notistack para las notificaciones.
    const [isLoadingRequest, setIsLoadingRequest] = useState(false);

    //Envia el email del usuario registrado al backend para volver a enviar el correo de confirmacion.
    const handleSendConfirmationEmail = () => {
        setIsLoadingRequest(true);
        //Obtiene el parametro email del query. ejemplo: /confirmation?email=test@email.com
        const { email } = router.query;

        //se hace una peticion get junto con el parametro ?usuario para enviar el correo de confirmacion al email registrado previamente.
        axiosInstance.get(`/usuario/reenviar_verificacion?usuario=${email}`)
        .then((res) => {
            setIsLoadingRequest(false);
            //Si se realiza correctamente el reenvio de confirmacion, salta una notificacion al usuario.
            if (res.data.status && res.status == 200) {
                enqueueSnackbar('', {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'success'} message={'Correo enviado correctamente.'}/>
                        )
                    }
                })
            }
        })
        .catch((error) => {
            setIsLoadingRequest(false);
            //Si existe algun error, igual salta una notificacion de tipo error con el mensaje del error.
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
                //Error general si no se puede hacer una conexion hacia la api.
                enqueueSnackbar('',{
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'error'} message={'Error al enviar el correo electrónico'}/>
                        )
                    }
                });
            }
        })
    }

    return (
        <LayoutSign>
            <Head>
                <title>R3D - Confirmación de email</title>
            </Head>
            <div className={styles.emailConfirmation_container}>
                {/*El componente particules muestra una animacion de particulas.*/}
                <Particles
                params={particles}
                className={styles.emailConfirmation_particles}/>
                <div className={styles.emailConfirmation_card}>
                    <div className={styles.emailConfirmation_cardInf}>
                        <h4>CONFIRMA TU CORREO ELECTRÓNICO</h4>
                        <p>
                            Hemos enviado un correo 
                            electrónico a la dirección que nos proporcionaste para confirmar tus datos.
                        </p>
                        <span>
                            ¿No lo recibiste? Da click para reenviar la confirmación.
                        </span>
                        <div onClick={handleSendConfirmationEmail} className={styles.emailConfirmation_cardInf_button}>
                            <MainButton onClick={handleSendConfirmationEmail} name={'REENVIAR CONFIRMACIÓN'} isLoadingRequest={isLoadingRequest}/>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutSign>
    )
}

export default ConfirmationEmail;