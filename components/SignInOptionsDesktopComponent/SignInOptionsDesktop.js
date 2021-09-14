import React from 'react';
import styles from './styles/SignInOptionsDesktop.module.css';
import SignInUser from './SignInUser';
import Image from 'next/image';

//Este componente renderiza las diferentes opciones cuando el usuario esta autenticado en la app.
const SignInOptionsDesktop = ({user}) => {
    return (
        <div className={styles.signInOptionsDesktop}>
            <SignInUser user={user}/>
            <div className={styles.signInOptionsDesktop_icons}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 47 47">
                    <g id="Grupo_10666" data-name="Grupo 10666" transform="translate(9719 9802)">
                        <g id="Grupo_10651" data-name="Grupo 10651" transform="translate(-11492.852 -11819.356)">
                            <g id="Rectángulo_2415" data-name="Rectángulo 2415" className={styles.cls_1_notification}  transform="translate(1773.851 2017.357)">
                                <rect className={styles.cls_3_notification} width="47" height="47" rx="23.5"/>
                                <rect className={styles.cls_4_notification} x="1" y="1" width="45" height="45" rx="22.5"/>
                            </g>
                        </g>
                        <g id="notification" transform="translate(-9706.565 -9790.119)">
                            <path id="Trazado_8446" data-name="Trazado 8446" className={styles.cls_2_notification} d="M137.482,420.979a4.155,4.155,0,0,1-4.149-4.149.83.83,0,1,1,1.66,0,2.49,2.49,0,1,0,4.979,0,.83.83,0,1,1,1.66,0A4.155,4.155,0,0,1,137.482,420.979Zm0,0" transform="translate(-126.416 -397.742)"/>
                            <path id="Trazado_8447" data-name="Trazado 8447" className={styles.cls_2_notification} d="M20.194,83.918H1.936A1.937,1.937,0,0,1,.677,80.509a.763.763,0,0,1,.089-.066,7.437,7.437,0,0,0,2.554-5.61V71.746A7.755,7.755,0,0,1,11.065,64a3.334,3.334,0,0,1,.546.033.829.829,0,1,1-.272,1.636,1.74,1.74,0,0,0-.273-.01,6.093,6.093,0,0,0-6.086,6.086v3.087a9.1,9.1,0,0,1-3.212,6.939c-.017.013-.031.026-.049.038a.274.274,0,0,0-.059.172.28.28,0,0,0,.277.277H20.194a.28.28,0,0,0,.277-.277.264.264,0,0,0-.06-.172l-.048-.038a9.1,9.1,0,0,1-3.212-6.939V73.627a.83.83,0,0,1,1.66,0v1.206a7.439,7.439,0,0,0,2.557,5.614.808.808,0,0,1,.085.064,1.936,1.936,0,0,1-1.259,3.407Zm0,0" transform="translate(0 -64)"/>
                        </g>
                        <circle id="Elipse_686" data-name="Elipse 686" className={styles.cls_2_notification} cx="4.5" cy="4.5" r="4.5" transform="translate(-9693.436 -9791.771)"/>
                    </g>
                </svg>
            </div>
            <div className={styles.signInOptionsDesktop_icons}>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 47 47">
                    <g id="Grupo_10668" data-name="Grupo 10668" transform="translate(-1775.852 -2017.356)">
                        <g id="Rectángulo_2415" data-name="Rectángulo 2415" className={styles.cls_1_message} transform="translate(1775.851 2017.357)">
                            <rect className={styles.cls_4_message} width="47" height="47" rx="23.5"/>
                            <rect className={styles.cls_5_message} x="1" y="1" width="45" height="45" rx="22.5"/>
                        </g>
                        <path id="Trazado_8449" data-name="Trazado 8449" className={styles.cls_2_message} d="M12.654,0H2.18S-.006-.452-.006,2.133V19.4l5.088-3.981h11.9c.264,0,2.314.258,2.314-2.528V8.455" transform="translate(1789.207 2031.173)"/>
                        <circle id="Elipse_689" data-name="Elipse 689" className={styles.cls_3_message} cx="4.5" cy="4.5" r="4.5" transform="translate(1803.504 2028.585)"/>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default SignInOptionsDesktop;