import styles from './styles/LoadingFeedback.module.css';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingFeedback = () => {
    const isotipo = useRef(null);

    useEffect(() => {
        gsap.to(isotipo.current, {
            duration: 1.5,
            rotation: 360,
            repeat: -1,
        })
    },[]);

    return (
        <div className={styles.loadingFeedback}>
            <div ref={isotipo} className={styles.loadingFeedback_logotipo}>
                <Image src='/seleccionar-mir3d.svg' alt='logotipo r3d' height={50} width={50}  priority={true}/>
            </div>
        </div>
    )
}


export default LoadingFeedback