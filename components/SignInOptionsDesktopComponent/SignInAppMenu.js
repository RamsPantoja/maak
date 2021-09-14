import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './styles/SignInAppMenu.module.css';
import useHandleShowMenu from './hooks/useHandleShowMenu';
import { useRouter } from 'next/router';

const SignInAppMenu = () => {
    const router = useRouter();
    const apps = useRef(null); //Hace referencia al contenedor de las apps de r3d.
    const appMenu = useRef(null); //Hace referencia a la lista desplegada cuando se da click en el icono de apps.
    const [isMenuOpen, handleOpenMenu] = useHandleShowMenu(apps.current); //Manejador para desplegar y ocultar la lista de apps.

    const handleOnClickApp = () => {
        handleOpenMenu(appMenu.current);
        router.push('/r3d')
    }

    return (
        <div ref={apps} className={styles.signInOptions_apps}>
            <span onClick={() => {handleOpenMenu(appMenu.current)}} className="material-icons-round">apps</span>
            <ul ref={appMenu}  className={ isMenuOpen ? styles.signInOptions_appMenu : styles.signInOptions_appMenu_noActive}>
                <span>Nuestras aplicaciones:</span>
                <li onClick={handleOnClickApp} className={styles.signInOptions_appMenu_item}>
                    <Image src='/ISOTIPO-blanco.svg' width={30} height={30} alt='Isotipo r3d'/>
                    <span>R3D</span>
                </li>
            </ul>
        </div>
    )
}

export default SignInAppMenu;