import React from 'react';
import styles from './styles/LayoutSign.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LegalInformation from '../LegalInformationComponent/LegalInformation';

//Layout para todas las paginas relacionadas con el registro, login, etc. 
const LayoutSign = ({children}) => {
    const router = useRouter(); //Accede al objeto router de la app.

    return (
        <div className={styles.sign}>
            <div className={styles.sign_header}>
                <div className={styles.header_logo}>
                    <Image onClick={() => router.push('/')} src='/IMAGOTIPO-blanco.svg' alt='logo-r3d' width={200} height={35}/>
                </div>
            </div>
            <div className={styles.sign_section}>
                {children}
            </div>
            <div className={styles.sign_footer}>
                <div className={styles.sign_footer_contact}>
                    <Link href='/about/contact'><a>Contacto</a></Link>
                </div>
                <LegalInformation/>
            </div>
        </div>
    )
}

export default LayoutSign;