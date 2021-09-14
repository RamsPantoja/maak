import React from 'react';
import Link from 'next/link';
import styles from './styles/SidebarSignOut.module.css';

const SidebarSignOut = ({router}) => {
    return (
        <div>
            <nav className={styles.sidebarSignOutMenu}>
                <Link href='/about/process'><a className={styles.sidebarSignOutMenu_link}>Proceso</a></Link>
                <Link href='/about/makers'><a className={styles.sidebarSignOutMenu_link}>Creadores</a></Link>
                <Link href='/about/manufacturers'><a className={styles.sidebarSignOutMenu_link}>Fabricantes</a></Link>
            </nav>
            <div className={styles.sidebarSignOutMenu_buttons}>
                <button onClick={() => router.push('/sign_in')} className={styles.sidebarSignOutMenu_buttons_signIn}>INICIAR SESIÓN</button>
                <button onClick={() => router.push('/sign_up')} className={styles.sidebarSignOutMenu_buttons_signUp}>REGISTRO</button>
            </div>
        </div>
    )
}

export default SidebarSignOut;