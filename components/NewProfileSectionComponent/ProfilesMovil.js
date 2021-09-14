import React from 'react';
import styles from './styles/ProfilesMovil.module.css';

//Components
import Profile from './Profile';

//Componente para mostrar los perfiles disponibles a seleccionar para dispositivos moviles.
const ProfilesMovil = ({getProfileSelected, slideSections}) => {
    return (
        <ul className={styles.profilesMovil_profiles}>
            <Profile
            imgSource={'/seleccionar-mir3d.svg'}
            title={'MI R3D'}
            text={'Iniciar proyectos'}
            text1={'Creadores'}
            text2={'Fabricantes'}
            getProfileSelected={getProfileSelected}
            slideSections={slideSections}
            profile={'MIR3D'}/>
            <Profile
            imgSource={'/seleccionar-creador.svg'}
            title={'CREADOR'}
            text={'Desarrollar proyectos'}
            text1={'Clientes'}
            text2={'Fabricantes'}
            getProfileSelected={getProfileSelected}
            slideSections={slideSections}
            profile={'MAKER'}/>
            <Profile
            imgSource={'/seleccionar-fabricar.svg'}
            title={'FABRICANTE'}
            text={'Fabricar proyectos'}
            text1={'Clientes'}
            text2={'Creadores'}
            getProfileSelected={getProfileSelected}
            slideSections={slideSections}
            profile={'MANUFACTURER'}/>
        </ul>
    )
}

export default ProfilesMovil;