import React, { useEffect } from 'react';
import styles from './styles/sign_up.module.css';
import Particles from 'react-particles-js';
import { particles } from '../utils/particles';
import { getSession } from 'next-auth/client';

//Componentes
import SignUpForm from '../components/SignUpFormComponent/SignUpForm';
import LayoutSign from '../components/layout/LayoutSign';
import Head from 'next/head';

//Componente que renderiza la pagina para el registro de usuarios.
const SignUp = () => {
    return (
        <LayoutSign>
            <Head>
                <title>R3D - Registro</title>
            </Head>
            <div className={styles.signUp_container}>
                <div className={styles.signUp_leftSection}>
                    {/*El componente particules muestra una animacion de particulas.*/}
                    <Particles
                    params={particles}
                    className={styles.signUp_leftSectionParticles}/>
                    <h2>CREAR NOS UNE</h2>
                </div>
                <div className={styles.signUp_rightSection}>
                    <SignUpForm/>
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

export default SignUp;