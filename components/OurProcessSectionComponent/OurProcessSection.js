import React, { Children } from 'react'
import styles from './styles/OurProcessSection.module.css';

const OurProcessSection = ({children}) => {
    return (
        <div className={styles.ourProcess_container}>
            <div className={styles.ourProcess_subContainer}>
                {children}
            </div>
        </div>
    )
}

export default OurProcessSection;