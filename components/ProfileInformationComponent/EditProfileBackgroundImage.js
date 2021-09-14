import React, { useRef, useState } from 'react';
import styles from './styles/EditProfileBackgroundImage.module.css';
import { useSession } from 'next-auth/client';

//Components
import Image from 'next/image';
import LayoutModal from '../layout/LayoutModal';
import SecondaryButtonProfile from '../ButtonsComponent/SecondaryButtonProfile';
import useHandleEditProfileBackgroundImageRequest from './hooks/useHandleEditProfileBackgroundImageRequest';
import LayoutModalCard from '../layout/LayoutModalCard';


/*Renderiza un modal para actualizar la imagen de fondo del perfil.
Recibe como props la funcion handleShowModal para cerrar el modal. */
const EditProfileBackgroundImage = ({handleShowModal, setProfileData, backgroundImage}) => {
    const inputFile = useRef(null); //Referencia al input tipo file
    const [file, setFile] = useState(null); //Guarda la imagen seleccionada por el usuario.
    const [session, loading] = useSession(); //Accede al objeto session con el useSession proporcionada por la libreria "next-auth.js"
    const [preViewImage, setPreViewImage] = useState(null); //Una prevista de la imagen seleccionada.

    //Hook para manejar la peticion al backend y subir la imagen de portada.
    const { isLoadingRequest, handleOnUpdateImage } = useHandleEditProfileBackgroundImageRequest(session.user.email, setProfileData, handleShowModal);
    
    //Manejador para abrir el explorador de archivos del client.
    const handleOnClickInputFile = () => {
        if (inputFile !== undefined || null) {
            inputFile.current.click();
        }
    }

    //Manejador para previsualizar la imagen antes de actualizarla.
    const handleOnChangeInputFile = (e) => {
        if (e.target.files[0]) {
            setPreViewImage({
                file: URL.createObjectURL(e.target.files[0])
            });

            setFile(e.target.files[0]);
        }
    }

    //Funcion que cierra el modal si el usuario no selecciono ninguna imagen y da click en "Guardar".
    //De lo contrario, se ejecuta el manejador que hace la peticion a la api para subir la imagen y guardarla.
    const handleOnSubmit = () => {
        if (file === null) {
            handleShowModal('noModal');
        } else {
            handleOnUpdateImage(file);
        }
    }

    return (
        <LayoutModal>
            <LayoutModalCard
            title={'ACTUALIZAR FONDO DE PERFIL'}
            handleOnSubmit={handleOnSubmit}
            handleShowModal={handleShowModal}
            idForm={null}
            isLoadingRequest={isLoadingRequest}>
                <div className={styles.editProfileBackgroundImage_preView_overFlow}>
                    <div className={styles.editProfileBackgroundImage_preView_container}>
                        <div className={styles.editProfileBackgroundImage_preView}>
                            <Image 
                            unoptimized={file !== null && true} 
                            src={ preViewImage !== null ? preViewImage.file : backgroundImage === null ? '/art-wave-curve-pattern.png' : backgroundImage} 
                            alt='Wave background' layout='fill' objectFit='cover'/>
                        </div>
                        <span>Tamaño y resolución recomendada 1364x250px - No debe pesar más de 12Mb</span>
                        <div onClick={handleOnClickInputFile} className={styles.editProfileImage_preViewImage_button}>
                            <input onChange={(e) => {handleOnChangeInputFile(e)}} ref={inputFile} type='file' style={{display: 'none'}}/>
                            <SecondaryButtonProfile name={'Cargar imagen'}/>
                        </div>
                    </div>
                </div>
            </LayoutModalCard>
        </LayoutModal>
    )
}

export default EditProfileBackgroundImage;