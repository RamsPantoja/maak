import React, { useRef } from 'react';
import { Fragment } from 'react';
import useHandleShowMenu from './hooks/useHandleShowMenu';
import styles from './styles/SignInUserProfileList.module.css';
import Image from 'next/image'

const SignInUserProfileList = ({userMenu}) => {
    const profileMenu = useRef(null); //Referencia al menu de seleccionar perfiles.
    const [isMenuOpen, handleOpenMenu] = useHandleShowMenu(userMenu.current, profileMenu.current);//Manejador para desplegar el menu de seleccionar perfiles.

    return (
        <Fragment>
            <li onClick={() => {handleOpenMenu(profileMenu.current)}} className={styles.signInOptions_userProfileMenu_item}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g id="Grupo_11245" data-name="Grupo 11245" transform="translate(12312 4970)">
                        <circle id="Elipse_789" data-name="Elipse 789" cx="12" cy="12" r="12" transform="translate(-12312 -4970)" fill="#fff"/>
                        <g id="Grupo_11243" data-name="Grupo 11243" transform="translate(-0.115 33)">
                        <path id="Trazado_8699" data-name="Trazado 8699" d="M5.534,15.9a6.708,6.708,0,0,1,6.555-4.1,6.653,6.653,0,0,1,6.535,4.1,10.581,10.581,0,0,1-6.535,2.118A10.678,10.678,0,0,1,5.534,15.9Z" transform="translate(-12311.964 -5001.076)"/>
                        <circle id="Elipse_790" data-name="Elipse 790" cx="3" cy="3" r="3" transform="translate(-12303 -4997)"/>
                        </g>
                    </g>
                </svg>
                <span>Cambiar perfil</span>
            </li>
            <ul ref={profileMenu} className={ isMenuOpen ? styles.signInOptions_userProfileMenu : styles.signInOptions_userProfileMenu_noActive}>
                <li className={styles.signInOptions_userProfileMenu_menuItem}>
                    <span>Mi R3D</span>
                    <Image src='/Cambiar-perfil-miR3D.svg' width={25} height={25} alt='chat notificaciones r3d' priority={true}/>
                </li>
                <li className={styles.signInOptions_userProfileMenu_menuItem}>
                    <span>Creador</span>
                    <Image src='/Cambiar-perfil-CREAR.svg' width={25} height={25} alt='chat notificaciones r3d' priority={true}/>
                </li>
                <li className={styles.signInOptions_userProfileMenu_menuItem}>
                    <span>Fabricante</span>
                    <Image src='/Cambiar-perfil-fab.svg' width={25} height={25} alt='chat notificaciones r3d' priority={true}/>
                </li>
            </ul>
        </Fragment>

    )
}

export default SignInUserProfileList;