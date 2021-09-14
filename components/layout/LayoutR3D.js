import React from 'react';
import styles from './styles/LayoutR3D.module.css';

//Componentes
import Navbar from '../NavbarComponent/Navbar';
import Sidebar from '../SidebarComponent/Sidebar';
import Footer from '../FooterComponent/Footer';

const LayoutR3D = ({children, session}) => {
    return (
        <div className={styles.layoutR3D}>
            <div className={styles.layoutR3D_header}>
                <Navbar session={session}/>
                <Sidebar session={session}/>
            </div>
            <div className={styles.layoutR3D_relativeContainer}>
                <div className={styles.layoutR3D_section}>
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default LayoutR3D;