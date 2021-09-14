import React, { useRef, useState } from 'react';
import styles from './styles/UploadImageProfile.module.css';

//Componentes
import Image from 'next/image';

const UploadImageProfile = ({distanceX, getImageSelected, slideSections}) => {
    const inputFile = useRef(null); //Referencia al input file.
    const [fileImage, setFileImage] = useState(null);

    const handleOnClickInputFile = () => {
        inputFile.current.click();
    }

    const handleOnChangeInputFile = (e) => {
        if (e.target.files[0]) {
            setFileImage({
                file: URL.createObjectURL(e.target.files[0])
            })
            getImageSelected(e.target.files[0]);
        }
    }

    const handleOnClickAcceptImage = () => {
        if (fileImage) {
            slideSections('contactInf');
        }
    }

    return (
        <div className={styles.uploadImageProfile} style={{transform: `translateX(${distanceX}%)`}}>
            <div className={styles.uploadImageProfile_description}>
                <h2>Empecemos por cargar tu imagen de perfil</h2>
                <p>Puede ser el logotipo que identifique tu empresa o servicio profesional, o bien la fotografía personal de tu preferenncia.</p>
                <span>Tamaño y resolución recomendada 1080x1080px - No debe pesar más de 10Mb</span>
                <div onClick={handleOnClickInputFile} className={styles.uploadImageProfile_preView}>
                    <input onChange={(e) => {handleOnChangeInputFile(e)}} ref={inputFile} type='file' style={{display: 'none'}}/>
                    <span>{fileImage !== null ? '' : 'Cargar imagen'}</span>
                    <Image unoptimized={fileImage !== null && true} className={styles.uploadImageProfile_preView_rounded} src={fileImage == null ? '/placeholder.png' : fileImage.file} alt='Imagen de perfil' layout='fill' objectFit='cover'/>
                </div>
                { fileImage !== null ? 
                    <div onClick={handleOnClickAcceptImage} className={styles.uploadImageProfile_preView_accept}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"/>
                        </svg>
                        <span>Aceptar</span>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default UploadImageProfile;