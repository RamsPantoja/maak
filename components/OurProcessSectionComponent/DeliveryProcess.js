import React, { Fragment, useEffect, useRef } from 'react';
import styles from './styles/DeliveryProcess.module.css';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';


//Renderiza la seccion Entrega al dar click en "Entrega" del apartado "Nuestro proceso" de la landing page.
const DeliveryProcess = () => {
    let isotipo = useRef(null);

    //Animacion al isotipo, lo cual hace girarlo 360 grados.
    useEffect(() => {
        gsap.to(isotipo, {
            duration: 3,
            rotation: 360,
            repeat: -1,
        })
    },[]);

    return (
        <Fragment>
            <p>Recibe tu orden con la confianza de tu servicio de paquetería favorito </p>
            <div className={styles.ourProcess_delivery}>
                <div className={styles.ourProcess_delivery_steps}>
                    <p>Verificación</p>
                    <span className="material-icons-round">arrow_forward_ios</span>
                    <p>Recolección</p>
                    <span className="material-icons-round">arrow_forward_ios</span>
                    <p>En ruta</p>
                    <span className="material-icons-round">arrow_forward_ios</span>
                    <p>Entrega</p>
                </div>
                <div className={styles.ourProcess_delivery_inf_container}>
                    <div className={styles.ourProcess_delivery_basicInf}>
                        <div ref={el => {isotipo = el}} className={styles.centerImg}>
                            <Image src='/ISOTIPO-naranja.svg' alt='desarrollo r3d' width={40} height={40}/>
                        </div>
                        <p>Una vez fabricado, el producto se verifica, recolecta, envía y entrega</p>
                        <Image src='/camion.svg' alt='desarrollo r3d' width={135} height={135}/>
                    </div>
                </div>
                <div className={styles.ourProcess_delivery_aboutDelivery}>
                    <p>ENVÍOS GRATIS</p>
                    <div className={styles.ourProcess_delivery_aboutDelivery_link}>
                        <Link href='/makers'><a>Conoce más</a></Link>
                        <span className="material-icons-round">arrow_forward_ios</span>
                    </div>
                </div>
                <Image className={styles.ourProcess_delivery_banda} src='/banda_envio.svg' alt='banda r3d' objectFit='cover' width={1500} height={300}/>
            </div>
        </Fragment>
    )
}

export default DeliveryProcess;