import React from 'react';
import styles from './styles/Stepper.module.css';

//Componente Stepper.
const Stepper = ({section, slideSections}) => {
    return (
        <div className={styles.stepperContainer}>
            <ul className={styles.stepper}>
                <li className={styles.stepper_step}>
                    { section === 'selectProfile' ? 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                            <circle cx="12" cy="12" r="5"/>
                        </svg> : 
                                <svg
                                onClick={() => {section === 'uploadImage' ? slideSections('selectProfile') : null}}
                                className={section === 'uploadImage' ? styles.stepper_step_hover : null} 
                                xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                                </svg>
                    }
                    <span className={styles.stepper_step_label}>Seleccionar perfil</span>
                </li>
                <li className={ section !== 'selectProfile' ? styles.stepper_progressLine_completed : styles.stepper_progressLine}>
                    <span></span>
                </li>
                <li className={styles.stepper_step}>
                    { section === 'uploadImage' ? 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                            <circle cx="12" cy="12" r="5"/>
                        </svg> : 
                                <svg 
                                className={section === 'contactInf' ? styles.stepper_step_hover : null} 
                                onClick={() => {section === 'contactInf' ? slideSections('uploadImage') : null}} 
                                xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                                </svg>
                    }   
                    <span className={styles.stepper_step_label}>Cargar imagen</span>
                </li>
                <li className={ section === 'contactInf' ? styles.stepper_progressLine_completed : styles.stepper_progressLine}>
                    <span></span>
                </li>
                <li className={styles.stepper_step}>
                    { section === 'contactInf' ? 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                            <circle cx="12" cy="12" r="5"/>
                        </svg> : 
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                                </svg>
                    }  
                    <span className={styles.stepper_step_label}>Información de contacto</span>
                </li>
            </ul>
        </div>
    )
}

export default Stepper;