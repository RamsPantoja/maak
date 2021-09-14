import React, { Fragment, useState } from 'react';
import styles from './styles/Sidebar.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SidebarSignOut from './SidebarSignOut';
import SignInOptionsMovil from '../SignInOptionsMovilComponent/SignInOptionsMovil';


//SidebarMenu para dispositivos menores a 768px de resolucion.
const Sidebar = ({session}) => {
    const router = useRouter(); //accede al objeto router de la app.
    const [showSidebarMenu, setShowSidebarMenu] = useState(false);
    
    //Muestra o oculta el sidebarMenu para dispositivos menores a 768px de resolucion.
    const handleShowSidebarMenu = () => {
      if (showSidebarMenu) {
        setShowSidebarMenu(false)
      } else {
        setShowSidebarMenu(true)
      }
    }

    return (
        <Fragment>
            <div className={styles.materialIcons_menu}>
                <div className={styles.logotipo} onClick={() => router.push('/')}>
                    { session ? <Image src='/R3D.com.mx.svg' alt='logo-r3d' width={200} height={35} priority={true}/>
                        : <Image src='/IMAGOTIPO-blanco.svg' alt='logo-r3d' width={200} height={35} priority={true}/>
                    }
                </div>
                <span className="material-icons-round" onClick={handleShowSidebarMenu}>menu</span>
            </div>
            <div className={ showSidebarMenu ? styles.sidebarMenu_container_open : styles.sidebarMenu_container_close}>
                <div className={styles.sidebarMenu_background}></div>
                <div className={styles.sidebarMenu_inf}>
                    <div className={styles.sidebarMenu_header}>
                        { session ? <Image src='/R3D.com.mx.svg' alt='logo-r3d' width={200} height={35} priority={true}/>
                            : <Image src='/IMAGOTIPO-blanco.svg' alt='logo-r3d' width={200} height={35} priority={true}/>
                        }
                        <div className={styles.materialIcons_close}>
                            <span className="material-icons-round" onClick={handleShowSidebarMenu}>close</span>
                        </div>
                    </div>
                    { session ? 
                        <SignInOptionsMovil handleShowSidebarMenu={handleShowSidebarMenu}/>
                        :   <SidebarSignOut router={router}/>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Sidebar;