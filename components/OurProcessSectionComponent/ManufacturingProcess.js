import React, { Fragment } from 'react';
import styles from './styles/ManufacturingProcess.module.css';
import Image from 'next/image';
import Link from 'next/link';


//Renderiza la seccion Fabricación al dar click en "Fabricación" del apartado "Nuestro proceso" de la landing page.
const ManufacturingProcess = () => {
    return (
        <Fragment>
            <p>Conectamos cada proyecto con fabricantes especializados</p>
            <div className={styles.ourProcess_manufacturing}>
                {/*Se muestra para dispositivos mayores a 600px de resolucion*/}
                <div className={styles.ourProcess_manufacturing_steps_container}>
                    <div className={styles.ourProcess_manufacturing_steps}>
                        <p>Vinculación</p>
                        <span className="material-icons-round">arrow_forward_ios</span>
                        <p>Cotización</p>
                        <span className="material-icons-round">arrow_forward_ios</span>
                        <p>Aprobación</p>
                        <span className="material-icons-round">arrow_forward_ios</span>
                        <p>Fabricación</p>
                    </div>
                </div>
                {/*Se muestra para dispositivos mayores a 600px de resolucion*/}
                <div className={styles.ourProcess_manufacturing_stepIcons_container}>
                    <div className={styles.ourProcess_manufacturing_stepIcons}>
                        <div className={styles.ourProcess_manufacturing_icon}>
                            <Image src='/iconoDesarrollo.svg' alt='concepto r3d' width={50} height={50}/>
                            <span>PROTOTIPO</span>
                        </div>
                        <span className="material-icons-round">arrow_forward_ios</span>
                        <div className={styles.ourProcess_manufacturing_icon}>
                            <Image src='/vinculacionS.svg' alt='vinculacion r3d' width={50} height={50}/>
                            <span>VINCULACIÓN</span>
                        </div>
                        <span className="material-icons-round">arrow_forward_ios</span>
                        <div className={styles.ourProcess_manufacturing_icon}>
                            <Image src='/vinculacionC.svg' alt='cotizacion r3d' width={50} height={50}/>
                            <span>COTIZACIÓN</span>
                        </div>
                        <span className="material-icons-round">arrow_forward_ios</span>
                        <div className={styles.ourProcess_manufacturing_icon}>
                            <Image src='/iconofabricar.svg' alt='fabricacion r3d' width={50} height={50}/>
                            <span>FABRICACIÓN</span>
                        </div>
                    </div>
                </div>
                {/*Se muestra para dispositivos moviles menores a 600px de resolucion*/}
                <div className={styles.ourProcess_manufacturing_stepIcons_container_movil}>
                    <div className={styles.ourProcess_manufacturing_stepIcons}>
                        <div className={styles.ourProcess_manufacturing_icon}>
                            <Image src='/iconoDesarrollo.svg' alt='concepto r3d' width={50} height={50}/>
                            <span>PROTOTIPO</span>
                        </div>
                        <span className="material-icons-round">arrow_forward_ios</span>
                        <div className={styles.ourProcess_manufacturing_icon}>
                            <Image src='/vinculacionS.svg' alt='vinculacion r3d' width={50} height={50}/>
                            <span>VINCULACIÓN</span>
                        </div>
                        <span className="material-icons-round">arrow_forward_ios</span>
                        <div className={styles.ourProcess_manufacturing_icon}>
                            <Image src='/iconofabricar.svg' alt='fabricacion r3d' width={50} height={50}/>
                            <span>FABRICACIÓN</span>
                        </div>
                    </div>
                </div>
                <div className={styles.ourProcess_manufacturing_aboutMakers}>
                    <p>FABRICANTES VERIFICADOS</p>
                    <div className={styles.ourProcess_manufacturing_aboutMakers_link}>
                        <Link href='/makers'><a>Conoce más</a></Link>
                        <span className="material-icons-round">arrow_forward_ios</span>
                    </div>
                </div>
                <Image className={styles.ourProcess_manufacturing_banda} src='/banda.svg'  objectFit='cover' alt='banda r3d' width={1500} height={300}/>
            </div>
        </Fragment>
    )
}

export default ManufacturingProcess;