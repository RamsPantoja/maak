import React from 'react';
import Link from 'next/link'
import styles from './styles/LegalInformation.module.css';

const LegalInformation = () => {
    return (
        <div className={styles.footer_legalInformation}>
            <Link href='/about/privacity'><a>Aviso de privacidad</a></Link> 
            <span>R3D ® Todos los derechos reservados 2021</span>
            <Link href='/about/terms_conditions'><a>Términos y condiciones</a></Link>
        </div>
    )
}

export default LegalInformation;