import React from 'react';
import styles from './styles/ChooseNewProfile.module.css';

//Componentes
import ProfilesDesktop from './ProfilesDesktop';
import ProfilesMovil from './ProfilesMovil';

//Componente principal para mostrar la seleccion de perfiles, dependiendo si el usuario accede desde escritorio o movil.
const ChooseNewProfile = ({getProfileSelected, distanceX, slideSections}) => {
    return (
        <div className={styles.chooseNewProfile} style={{transform: `translateX(${distanceX}%)`}}>
            <h2>Seleccionar perfil principal</h2>
            <ProfilesDesktop getProfileSelected={getProfileSelected} slideSections={slideSections}/>
            <ProfilesMovil getProfileSelected={getProfileSelected} slideSections={slideSections}/>
        </div>
    )
}

export default ChooseNewProfile;