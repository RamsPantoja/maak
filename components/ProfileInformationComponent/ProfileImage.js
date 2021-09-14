import React from 'react';
import styles from './styles/ProfileImage.module.css';

import Image from 'next/image';

//Componente que rederiza la imagen de perfil, en la pagina /r3d/my_profile.
//Recibe como parametro handleOnClickShowModal y este es una funcion que muestra un modal para actualizar la imagen de perfil.
const ProfileImage = ({handleOnClickShowModal, profileImage}) => {
    return (
        <div className={styles.profileImage} onClick={() => {handleOnClickShowModal('editProfileImage')}}>
            <Image className={styles.imgRounded} src={profileImage} alt='profile image' objectFit='cover' layout='fill'/>
            <div className={styles.profileImage_buttonAdd}>
                <Image src='/boton-agregar.svg' alt='add button' width={40} height={40}/>
            </div>
        </div>
    )
}

export default ProfileImage;