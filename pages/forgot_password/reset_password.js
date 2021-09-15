import React from 'react'
import { particles } from '../../utils/particles';
import styles from './styles/reset_password.module.css';

//Componentes;
import LayoutSign from '../../components/layout/LayoutSign';
import Head from 'next/head';
import Particles from 'react-particles-js';

//hooks
import useHandleResponseRequest from '../../components/ResetPasswordComponent/hooks/useHandleResponseRequest';

const ResetPassword = () => {
    const [sectionResetPassword] = useHandleResponseRequest();// Manejador para mostrar las diferentes secciones al restablecer la contraseña.

    return (
        <LayoutSign>
            <Head>
                <title>R3D - Restablecer contraseña</title>
            </Head>
            <div className={styles.resetPassword_container}>
                <Particles
                params={particles}
                className={styles.resetPassword_particles}/>
                <div className={styles.resetPassword_card}>
                    <div className={styles.resetPassword_card_grid}>
                        <h4>RESTABLECER CONTRASEÑA</h4>
                        { sectionResetPassword }
                    </div>
                </div>
            </div>
        </LayoutSign>
    )
}

export default ResetPassword;