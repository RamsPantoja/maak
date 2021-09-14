import React from 'react';
import Particles from 'react-particles-js';
import LayoutSign from '../../components/layout/LayoutSign';
import axiosInstance from '../../utils/axios_instance';
import { particles } from '../../utils/particles';
import styles from './styles/confirmated_email.module.css';
import Link from 'next/link';
import Head from 'next/head';

const ConfirmatedEmail = ({responseData}) => {
    //Si existe algun error al verificar el correo, muestra una pantalla con el error.
    if (responseData.error !== null) {
        if (responseData.error.mensaje) {
            return (
                <LayoutSign>
                    <Head>
                        <title>R3D - Email confirmado</title>
                    </Head>
                    <div className={styles.confirmation_email_error}>
                        <span className="material-icons-round">error</span>
                        <p>{responseData.error.mensaje[0]}</p>
                    </div>
                </LayoutSign>
            )
        } else {
            return (
                <LayoutSign>
                    <Head>
                        <title>R3D - Email confirmado</title>
                    </Head>
                    <div className={styles.confirmation_email_error}>
                        <div className={styles.confirmation_email_statusError}>
                            <span className="material-icons-round">error</span>
                            <p>403</p>
                        </div>
                        <p>Hubo un error al confirmar el correo electrónico, intentalo de nuevo :(</p>
                        <p>Presiona F5 para volver a intentarlo.</p>
                    </div>
                </LayoutSign>
            )
        }
    //Si se confirma correctamente el correo, muestra la pantalla de correo confirmado.    
    } else if (responseData.success !== null) {
        return (
            <LayoutSign>
                <Head>
                    <title>R3D - Email confirmado</title>
                </Head>
                <div className={styles.confirmatedEmail_container}>
                    <Particles
                    params={particles}
                    className={styles.confirmatedEmail_particles}/>
                    <div className={styles.confirmatedEmail_card}>
                        <div className={styles.confirmatedEmail_cardInf}>
                            <h4>¡CORREO ELECTRÓNICO CONFIRMADO!</h4>
                            <span className="material-icons-round">check_circle</span>
                            <p>Gracias por haber confirmado tu dirección de correo electrónico</p>
                            <p>Ya puedes iniciar sesión con tu correo electrónico y contraseña</p>
                            <div className={styles.confirmatedEmail_card_link}>
                                <Link href='/sign_in'><a>INICIAR SESIÓN</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutSign>
        )
    }
}

export async function getServerSideProps(context) {
    const token = context.query.token; //token de verificacion.
    let responseData = {
        success: null,
        error: null
    }
    //Confirma el correo electronico del usuario especifico antes de mostrarle la pagina de correo confirmado.
    try {
        const response = await axiosInstance.get('/usuario/verificar', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        responseData.success = response.data;
    } catch (error) {
        if (error) {
            responseData.error = error.response.data
        }
    }


    return {
        props:{ responseData }
    }
}

export default ConfirmatedEmail;