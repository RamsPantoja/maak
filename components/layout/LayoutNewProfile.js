import React from 'react';
import styles from './styles/LayoutNewProfile.module.css';
import backgroundImage from '../../public/Seleccionar-Fondo.png';

//Componentes
import LegalInformation from '../LegalInformationComponent/LegalInformation';
import Navbar from '../NavbarComponent/Navbar';
import Sidebar from '../SidebarComponent/Sidebar';
import Image from 'next/image';
import Link from 'next/link';

//Componente Layout para seleccionar por primera vez el perfil.
const LayoutNewProfile = ({children, session}) => {
    return (
        <div className={styles.layoutNewProfile}>
            <div className={styles.layoutNewProfile_header}>
                <Navbar session={session}/>
                <Sidebar session={session}/>
            </div>
            <div className={styles.layoutNewProfile_section_container}>
                <div className={styles.layoutNewProfile_section_background}>
                    <Image src={backgroundImage} alt='diseño design background 3d r3d' layout='fill' objectFit='cover' quality={100} placeholder='blur'/>
                </div>
                <div className={styles.layoutNewProfile_section}>
                    {children}
                </div>
            </div>
            <div className={styles.layoutNewProfile_footer_contact}>
                <Link href='/about/contact'><a>Contacto</a></Link>
            </div>
            <LegalInformation/>
        </div>
    )
}

export default LayoutNewProfile;