import React from 'react';
import styles from './styles/Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SignInOptionsDesktop from '../SignInOptionsDesktopComponent/SignInOptionsDesktop';

//Navbar para dispositivos mayores a 768px de resolucion.
const Navbar = ({session}) => {
    const router = useRouter(); //Accede al objeto router de la app.

    return (
        <div className={styles.header_inf}>
            <div className={styles.header_logo} onClick={() => router.push('/')}>
                { session ?
                    <Image src='/R3D.com.mx.svg' alt='logo-r3d' width={200} height={35} priority={true}/>
                    : <Image src='/IMAGOTIPO-blanco.svg' alt='logo-r3d' width={200} height={35} priority={true}/>
                }
            </div>
            { session ? 
                <nav className={styles.navbar}>
                    <Link href='/about/process'><a className={styles.navbar_link}>Iniciar proyecto</a></Link>
                    <Link href='/about/makers'><a className={styles.navbar_link}>Mis proyectos</a></Link>
                </nav>
                :   <nav className={styles.navbar}>
                        <Link href='/about/process'><a className={styles.navbar_link}>Proceso</a></Link>
                        <Link href='/about/makers'><a className={styles.navbar_link}>Creadores</a></Link>
                        <Link href='/about/manufacturers'><a className={styles.navbar_link}>Fabricantes</a></Link>
                    </nav>
            }
            <div className={styles.header_inf_signContainer}>
                { session ?
                    <SignInOptionsDesktop user={session.user.firstname}/>
                    :   <div className={styles.signButtons}>
                            <button onClick={() => router.push('/sign_in')} className={styles.signButtons_signIn}>INICIAR SESIÓN</button>
                            <button onClick={() => router.push('/sign_up')} className={styles.signButtons_signUp}>REGISTRO</button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Navbar;