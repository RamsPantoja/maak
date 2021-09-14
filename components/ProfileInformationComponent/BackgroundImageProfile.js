import React from 'react';
import Image from 'next/image';
import styles from './styles/BackgroundImageProfile.module.css';
import { blurForBackgroundProfileImg } from '../../utils/blur';

//Componente que renderiza la imagen de fondo, en la pagina de /r3d/my_profile.
//Recibe como props la funcion handleOnClickShowModal, la cual abre un modal para actualizar la imagen de fondo.
const BackgroundImageProfile = ({handleOnClickShowModal, backgroundImage}) => {
    return (
        <div className={styles.backgroundImageProfile}>
            <Image 
            src={backgroundImage === null ? '/art-wave-curve-pattern.png' : backgroundImage} 
            alt='wave pattern ola platino' layout='fill' objectFit='cover' placeholder='blur' blurDataURL={blurForBackgroundProfileImg} />
            <div className={styles.backgroundImageProfile_buttonAdd} onClick={() => {handleOnClickShowModal('editProfileBackgroundImage')}}>
                <Image src='/boton-agregar.svg' alt='add button' width={40} height={40}/>
            </div>
        </div>
    )
}

export default BackgroundImageProfile;