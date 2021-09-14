import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles/NavbarProcess.module.css';

//Este componente muestra el apartado de "Nuestro proceso".
const NavbarProcess = ({handleProcessSection, distanceX}) => {
    const [activeSection, setActiveSection] = useState('development'); //Guarda la seccion activada.

    //Activa la funcion handleProcessSection la cual se encarga de renderizar las diferentes secciones en el apartado "Nuestro proceso".
    const handleOnClickIcon = (e, section) => {
        handleProcessSection(e, section); //Recibe la seccion a renderizar por parametro.
        setActiveSection(section) //Actualiza activateSection
    }

    return (
        <div className={styles.ourProcess_steps}>
            <h1>Nuestro proceso</h1>
            <div className={styles.ourProcess_stepIcons}>
                <div className={styles.ourProcess_steps_navbar}>
                    <div className={activeSection === 'development' ? styles.ourProcess_steps_navbar_icon : styles.ourProcess_steps_navbar_icon_noActive}>
                        <Image onClick={(e) => {handleOnClickIcon(e, 'development')}} src='/iconoDesarrollo.svg' alt='desarrollo r3d' width={60} height={60} priority={true}/>
                    </div>
                    <span 
                    className={styles.ourProcess_steps_navbar_sectionName} 
                    onClick={(e) => {handleOnClickIcon(e, 'development')}}>
                        DESARROLLO
                    </span>
                    <span className={ activeSection === 'development' ? styles.ourProcess_steps_navbar_sectionName_selected : styles.ourProcess_steps_navbar_sectionName_noSelected}></span>
                </div>
                <span>..........</span> {/*Se muestra en dispositivos menores a 540px de resolucion */}
                <div className={styles.arrowIcon}>
                    <Image src='/iconoflecha.svg' width={30} height={30} alt='flecha arrow' priority={true}/>
                </div>
                <div className={styles.ourProcess_steps_navbar}>
                    <div className={activeSection === 'manufacturing' ? styles.ourProcess_steps_navbar_icon : styles.ourProcess_steps_navbar_icon_noActive}>
                        <Image onClick={(e) => {handleOnClickIcon(e, 'manufacturing')}} src='/iconofabricar.svg' alt='fabricar r3d' width={60} height={60} priority={true}/>
                    </div>
                    <span 
                    className={styles.ourProcess_steps_navbar_sectionName} 
                    onClick={(e) => {handleOnClickIcon(e, 'manufacturing')}}>
                        FABRICACIÓN
                    </span>
                    <span className={ activeSection === 'manufacturing' ? styles.ourProcess_steps_navbar_sectionName_selected : styles.ourProcess_steps_navbar_sectionName_noSelected}></span>
                </div>
                <span>..........</span> {/*Se muestra en dispositivos menores a 540px de resolucion */}
                <div className={styles.arrowIcon}>
                    <Image src='/iconoflecha.svg' width={30} height={30} alt='flecha arrow' priority={true}/>
                </div>
                <div className={styles.ourProcess_steps_navbar}>
                    <div className={activeSection === 'delivery' ? styles.ourProcess_steps_navbar_icon : styles.ourProcess_steps_navbar_icon_noActive}>
                        <Image onClick={(e) => {handleOnClickIcon(e, 'delivery')}} src='/iconoEntr.svg' alt='entrega r3d' width={60} height={60} priority={true}/>
                    </div>
                    <span 
                    className={styles.ourProcess_steps_navbar_sectionName} 
                    onClick={(e) => {handleOnClickIcon(e, 'delivery')}}>
                        ENTREGA
                    </span>
                    <span className={ activeSection === 'delivery' ? styles.ourProcess_steps_navbar_sectionName_selected : styles.ourProcess_steps_navbar_sectionName_noSelected}></span>
                </div>
            </div>
            {/*Este navbar se muestra dispositivos menores 540px de resolucion*/}
            <div className={styles.ourProcess_steps_navbar_movil}>
                <div className={styles.ourProcess_steps_navbar_movil_sectionName_container} style={{transform: `translateX(${distanceX}%)`}}>
                    <span className={styles.ourProcess_steps_navbar_movil_sectionName}>DESARROLLO</span>
                    <span onClick={(e) => {handleOnClickIcon(e, 'manufacturing')}} className="material-icons-round">arrow_forward_ios</span>
                </div>
                <div className={styles.ourProcess_steps_navbar_movil_sectionName_container} style={{transform: `translateX(${distanceX}%)`}}>
                    <span onClick={(e) => {handleOnClickIcon(e, 'development')}} className="material-icons-round">arrow_back_ios</span>
                    <span className={styles.ourProcess_steps_navbar_movil_sectionName}>FABRICACIÓN</span>
                    <span onClick={(e) => {handleOnClickIcon(e, 'delivery')}} className="material-icons-round">arrow_forward_ios</span>
                </div>
                <div className={styles.ourProcess_steps_navbar_movil_sectionName_container} style={{transform: `translateX(${distanceX}%)`}}>
                    <span onClick={(e) => {handleOnClickIcon(e, 'manufacturing')}} className="material-icons-round">arrow_back_ios</span>
                    <span className={styles.ourProcess_steps_navbar_movil_sectionName}>ENTREGA</span>
                </div>
            </div>
        </div>
    )
}

export default NavbarProcess;