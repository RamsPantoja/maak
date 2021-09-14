import React, { useRef } from 'react';
import styles from './styles/SignInUser.module.css';
import { signOut } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';

//Componentes
import SignInUserProfileList from './SignInUserProfileList';
import Image from 'next/image';

//Hooks
import useHandleSwitchIconProfile from './hooks/useHandleSwitchIconProfile';
import useHandleShowMenu from './hooks/useHandleShowMenu';

const SignInUser = ({user}) => {
    const userContainer = useRef(null);//Hace referencia al contenedor del componente SignInUser.
    const userMenu = useRef(null);//Hace referencia al menu del SignInUser.
    const router = useRouter();

    //Se encarga de desplegar el menu dentro de la option cuenta de usuario.
    const [isMenuOpen, handleOpenMenu] = useHandleShowMenu(userContainer.current, userMenu.current);
    const { iconProfile } = useHandleSwitchIconProfile();

    return (
        <div ref={userContainer} className={styles.signInOptions_userContainer}>
            <div className={styles.signInOptions_user} onClick={() => {handleOpenMenu(userMenu.current)}}>
                <p className={styles.signInOptions_userName}>{user}</p>
                <Image className={styles.signInOptions_image} src={iconProfile} alt='Icono de perfil' height={36} width={36}/>
            </div>
            <ul ref={userMenu}  className={ isMenuOpen ? styles.signInOptions_userMenu : styles.signInOptions_userMenu_noActive}>
                <li className={styles.signInOptions_userMenu_item} onClick={() => router.push('/my_profile')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g id="Grupo_11244" data-name="Grupo 11244" transform="translate(12352 4970)">
                            <circle id="Elipse_781" data-name="Elipse 781" cx="12" cy="12" r="12" transform="translate(-12352 -4970)" fill="#fff"/>
                            <path id="Sustracción_156" data-name="Sustracción 156" d="M6.555,6.22A10.814,10.814,0,0,1,0,4.1l0-.009A6.726,6.726,0,0,1,6.555,0c.2,0,.4.007.6.019a5.206,5.206,0,0,0-.1.993A5.194,5.194,0,0,0,10.02,5.685,11.366,11.366,0,0,1,6.555,6.22Z" transform="translate(-12346.602 -4956.28)"/>
                            <path id="Trazado_8690" data-name="Trazado 8690" d="M17.949,14.342a2.9,2.9,0,0,0-.04-.421l.561-.487a.336.336,0,0,0,.067-.421l-.394-.681a.326.326,0,0,0-.394-.147l-.708.24A2.435,2.435,0,0,0,16.32,12l-.147-.728a.336.336,0,0,0-.327-.267h-.788a.336.336,0,0,0-.327.267L14.584,12a2.435,2.435,0,0,0-.721.421l-.708-.24a.331.331,0,0,0-.394.147l-.394.681a.336.336,0,0,0,.067.421l.561.487a2.228,2.228,0,0,0,0,.841l-.561.487a.336.336,0,0,0-.067.421l.394.681a.326.326,0,0,0,.394.147l.708-.24a2.435,2.435,0,0,0,.721.421l.147.728a.336.336,0,0,0,.327.267h.788a.336.336,0,0,0,.327-.267l.147-.728a2.435,2.435,0,0,0,.721-.421l.708.24a.331.331,0,0,0,.394-.147l.394-.681a.336.336,0,0,0-.067-.421l-.561-.487A2.9,2.9,0,0,0,17.949,14.342Zm-2.5,1.335a1.335,1.335,0,1,1,1.335-1.335A1.339,1.339,0,0,1,15.445,15.677Z" transform="translate(-12350.305 -4969.378)"/>
                            <circle id="Elipse_792" data-name="Elipse 792" cx="3" cy="3" r="3" transform="translate(-12343.115 -4964)"/>
                        </g>
                    </svg>
                    <span>Mis datos</span>
                </li>
                <SignInUserProfileList userMenu={userMenu}/>
                <li className={styles.signInOptions_userMenu_item}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g id="Grupo_11244" data-name="Grupo 11244" transform="translate(-1640 -1880)">
                            <g id="Grupo_11238" data-name="Grupo 11238" transform="translate(1640.176 1880.23)">
                            <circle id="Elipse_788" data-name="Elipse 788" cx="12" cy="12" r="12" transform="translate(-0.176 -0.23)" fill="#fff"/>
                            <path id="Trazado_8695" data-name="Trazado 8695" d="M-2.413-5.986v-.63a2.794,2.794,0,0,1,.349-1.422A4.573,4.573,0,0,1-.787-9.323,5.343,5.343,0,0,0,.392-10.362a1.5,1.5,0,0,0,.285-.894A.968.968,0,0,0,.268-12.1a1.949,1.949,0,0,0-1.141-.289,6.551,6.551,0,0,0-2.912.834l-.928-1.864A8.111,8.111,0,0,1-.685-14.482,4.284,4.284,0,0,1,2.1-13.64a2.752,2.752,0,0,1,1.034,2.248,2.989,2.989,0,0,1-.426,1.618A6.067,6.067,0,0,1,1.094-8.242,4.994,4.994,0,0,0,.06-7.323,1.428,1.428,0,0,0-.157-6.5v.511Zm-.272,2.912A1.427,1.427,0,0,1-2.3-4.156a1.554,1.554,0,0,1,1.115-.366,1.509,1.509,0,0,1,1.094.375A1.424,1.424,0,0,1,.294-3.074,1.423,1.423,0,0,1-.1-2.014a1.482,1.482,0,0,1-1.09.387,1.527,1.527,0,0,1-1.107-.379A1.418,1.418,0,0,1-2.686-3.074Z" transform="translate(12.672 19.939)"/>
                            </g>
                        </g>
                    </svg>
                    <span>Ayuda</span>
                </li>
                <li className={styles.signInOptions_userMenu_item} onClick={() => signOut()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g id="Grupo_11243" data-name="Grupo 11243" transform="translate(-1684 -1880)">
                            <circle id="Elipse_785" data-name="Elipse 785" cx="12" cy="12" r="12" transform="translate(1684 1880)" fill="#fff"/>
                            <g id="logout_black_24dp" transform="translate(1687.582 1882.297)">
                            <g id="Grupo_11230" data-name="Grupo 11230">
                                <path id="Trazado_8679" data-name="Trazado 8679" d="M0,0H19.636V19.636H0Z" fill="none"/>
                            </g>
                            </g>
                            <g id="Grupo_11240" data-name="Grupo 11240" transform="translate(1689.702 1885.717)">
                            <path id="Trazado_8696" data-name="Trazado 8696" d="M-11515.5-5594.74h-4.388v11.979h4.388" transform="translate(11521.182 5595.147)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                            <g id="Grupo_11239" data-name="Grupo 11239" transform="translate(3.918 3.326)">
                                <path id="Trazado_8697" data-name="Trazado 8697" d="M-11516.033-5588.613h5.263" transform="translate(11516.804 5591.684)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1.5"/>
                                <path id="Polígono_64" data-name="Polígono 64" d="M2.859.212a.3.3,0,0,1,.424,0L5.63,2.559a.3.3,0,0,1-.212.512H.724a.3.3,0,0,1-.212-.512Z" transform="translate(8.736 0) rotate(90)"/>
                            </g>
                            </g>
                        </g>
                    </svg>
                    <span>Cerrar sesión</span>
                </li>
            </ul>
        </div>
    )
}

export default SignInUser;