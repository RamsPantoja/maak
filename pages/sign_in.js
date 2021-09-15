import React from 'react';
import styles from './styles/sign_in.module.css';
import Particles from 'react-particles-js';
import { particles } from '../utils/particles';

//Componentes
import SignInForm from '../components/SignInFormComponent/SignInForm';
import LayoutSign from '../components/layout/LayoutSign';
import { getSession } from 'next-auth/client';
import Head from 'next/head';

//Pagina para el inicio de sesión.
const SignIn = () => {
    return (
        <LayoutSign>
            <Head>
                <title>R3D - Iniciar sesión</title>
            </Head>
            <div className={styles.signIn_container}>
                {/*El componente particules muestra una animacion de particulas.*/}
                <Particles
                params={particles}
                className={styles.signIn_particles}/>
                <div className={styles.signIn_card}>
                    <h4>INICIAR SESIÓN</h4>
                    <SignInForm/>
                </div>
            </div>
        </LayoutSign>
    )
}

export async function getServerSideProps({req, res}) {
    const session = await getSession({req});
    
    if (session && req) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

export default SignIn;