import React from 'react';
import styles from './styles/LayoutModal.module.css';

//Renderiza un modal en toda la pagina.
const LayoutModal = ({children}) => {
    return (
        <div className={styles.layoutModal_container}>
            <div className={styles.layoutModal_background}></div>
            <div className={styles.layoutModal_card_container}>
                {children}
            </div>
        </div>
    )
}

export default LayoutModal;