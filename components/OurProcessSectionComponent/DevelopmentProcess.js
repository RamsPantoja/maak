import React, { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/DevelopmentProcess.module.css';
import gsap from 'gsap';

//Renderiza la seccion Desarrollo al dar click en "Desarrollo" del apartado "Nuestro proceso" de la landing page.
const DevelopmentProcess = () => {
    const [distanceX, setDistanceX] = useState(0);
    let arrow = useRef(null)
    let arrow1 = useRef(null)

    //Crea un slide al contenido de "Desarrollo", hacia la derecha e Izquierda.
    const handleOnSlide = () => {
        if (distanceX == 0) {
            setDistanceX(distanceX - 100)
        } else if ( distanceX == -1 * 100) {
            setDistanceX(distanceX + 100)
        }
    }

    //arrow_forward_ios animados.
    useEffect(() => {
        gsap.to(arrow, {
            duration: 1,
            x:15,
            yoyo: true,
            repeat: -1
        });
        gsap.to(arrow1, {
            duration: 1,
            x:-15,
            yoyo: true,
            repeat: -1
        })
    },[arrow])

    return (
        <Fragment>
            <p>Inicia cada proyecto desde dos etapas de desarrollo</p>
            <div className={styles.ourProcess_development}>
                <div className={styles.ourProcess_development_card} style={{transform: `translateX(${distanceX}%)`}}>
                    <div className={styles.arrowToSlide} onClick={handleOnSlide} ref={el => {arrow = el}}>
                        <span>Toca aquí</span>
                        <span className="material-icons-round">arrow_forward_ios</span>
                    </div>
                    <Image src='/iconoIdea.svg' width={80} height={80} alt='Idea-r3d-proceso' title='Idea' priority={true}/>
                    <h2>CONCEPTO</h2>
                    <p>Para desarrollar productos desde cero</p>
                    <p className={styles.ourProcess_development_card_p2}>Conectamos tu proyecto con creadores</p>
                    <p>Recibe propuestas</p>
                    <Link href='/ejemplo'><a>Ver ejemplo</a></Link>
                </div>
                <div className={styles.ourProcess_development_card} style={{transform: `translateX(${distanceX}%)`}}>
                    <div className={styles.arrowToSlide} onClick={handleOnSlide} ref={el1 => {arrow1 = el1}}>
                        <span className="material-icons-round">arrow_back_ios</span>
                        <span>Volver</span>
                    </div>
                    <Image src='/iconoDesarrollo.svg' width={80} height={80} alt='Concepto-r3d-proceso' title='Concepto' priority={true}/>
                    <h2>PROTOTIPO</h2>
                    <p>Para materializar productos definidos</p>
                    <p className={styles.ourProcess_development_card_p2}>Conectamos tu proyecto con fabricantes</p>
                    <p>Recibe cotizaciones</p>
                    <Link href='/ejemplo'><a>Ver ejemplo</a></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default DevelopmentProcess;