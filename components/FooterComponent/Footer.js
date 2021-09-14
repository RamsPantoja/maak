import React from 'react';
import styles from './styles/Footer.module.css';

//Componentes
import Link from 'next/link';
import Image from 'next/image'
import SocialNetworks from '../SocialNetworksComponent/SocialNetworks';
import LegalInformation from '../LegalInformationComponent/LegalInformation';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_aboutR3d}>
                <div className={styles.footer_aboutR3d_inf}>
                    <ul className={styles.footer_aboutR3d_inf_list}>
                        <li><Link href='/about/about_us'><a className={styles.footer_aboutR3d_inf_list_link}>Nosotros</a></Link></li>
                    </ul>
                    <ul className={styles.footer_aboutR3d_inf_list}>
                        <li><Link href='/about/team'><a className={styles.footer_aboutR3d_inf_list_link}>Equipo</a></Link></li>
                        <li><Link href='/blog'><a className={styles.footer_aboutR3d_inf_list_link}>Blog</a></Link></li>
                    </ul>
                    <div className={styles.footer_aboutR3d_inf_icons}>
                        <Image src='/IMAGOTIPO-blanco.svg' alt='logo r3d' width={200} height={35}/>
                        <div className={styles.footer_aboutR3d_inf_socials}>
                            <SocialNetworks/>
                        </div>
                    </div>
                    <ul className={styles.footer_aboutR3d_inf_list}>
                        <li><Link href='/about/contact'><a className={styles.footer_aboutR3d_inf_list_link}>Contacto</a></Link></li>
                        <li><Link href='/news'><a className={styles.footer_aboutR3d_inf_list_link}>Noticias</a></Link></li>
                    </ul>
                    <ul className={styles.footer_aboutR3d_inf_list}>
                        <li><Link href='/about/faqs'><a className={styles.footer_aboutR3d_inf_list_link}>FAQs</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer_aboutR3d_inf_socials_movilDevice}>
                <SocialNetworks/>
            </div>
            <LegalInformation/>
        </footer>
    )
}

export default Footer;