import React from 'react';
import ImportantNotifications from '../ImportantNotificationsComponent/ImportantNotifications';
import styles from './styles/ProfileMyDataLayout.module.css';

//Layout para el apartado "Mis datos" de la pafina /r3d/my_profile
const ProfileAdvancedDataLayout = ({children, message}) => {
    return (
        <div className={styles.profileMyDataSection}>
            <ImportantNotifications message={message}/>
            <div className={styles.profileMyDataSection_formContainer}>
                {children}
            </div>
        </div>
    )
}

export default ProfileAdvancedDataLayout;