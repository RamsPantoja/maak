import React from 'react';
import styles from './styles/ProfileMyDataNavbar.module.css';

//Renderiza el navbar para el apartado "Mis datos" en la pagina /r3d/my_profile.
/*
recibe como props handleOnClickSection, whichSection:
handleOnClickSection: Funcion para mostrar la seccion seleccionada.
whichSection: Variable de estado para saber cual seccion esta siendo mostrada.
*/
const ProfileMyDataNavbar = ({handleOnClickSection, whichSection}) => {
    return (
        <div className={styles.profileMyDataNavbar}>
            <div className={styles.profileMyDataNavbar_items}>
                <div className={styles.profileMyDataNavbar_item}>
                    <div className={whichSection === 'myDataSection' ? styles.profileMyDataNavbar_item_name_active : styles.profileMyDataNavbar_item_name}>
                        <p onClick={() => {handleOnClickSection('myDataSection')}}>Datos de cuenta</p> 
                    </div>
                    <span  className={ whichSection === 'myDataSection' ? styles.profileMyDataNavbar_item_selected : styles.profileMyDataNavbar_item_noSelected}></span>
                </div>
                <div className={styles.profileMyDataNavbar_item}>
                    <div className={whichSection === 'myPaymentDataSection' ? styles.profileMyDataNavbar_item_name_active : styles.profileMyDataNavbar_item_name}>
                        <p onClick={() => {handleOnClickSection('myPaymentDataSection')}}>Pagos</p>
                    </div>
                    <span className={ whichSection === 'myPaymentDataSection' ? styles.profileMyDataNavbar_item_selected : styles.profileMyDataNavbar_item_noSelected}></span>
                </div>
                <div className={styles.profileMyDataNavbar_item}>
                    <div className={whichSection === 'myAddressDataSection' ? styles.profileMyDataNavbar_item_name_active : styles.profileMyDataNavbar_item_name}>
                        <p onClick={() => {handleOnClickSection('myAddressDataSection')}}>Direcciones</p>
                    </div>
                    <span className={ whichSection === 'myAddressDataSection' ? styles.profileMyDataNavbar_item_selected : styles.profileMyDataNavbar_item_noSelected}></span>
                </div>
            </div>
        </div>
    )
}

export default ProfileMyDataNavbar;