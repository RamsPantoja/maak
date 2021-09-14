import React, { useRef, useState } from 'react';
import styles from './styles/EditProfileImage.module.css'
import { useSession } from 'next-auth/client';

//Componentes
import LayoutModal from '../layout/LayoutModal';
import Image from 'next/image';
import MainButtonProfile from '../ButtonsComponent/MainButtonProfile';
import SecondaryButtonProfile from '../ButtonsComponent/SecondaryButtonProfile';

//Hooks
import useHandleEditProfileImageRequest from './hooks/useHandleEditProfileImageRequest';
import LayoutModalCard from '../layout/LayoutModalCard';

/*Renderiza un modal para actualizar la imagen de perfil.
Recibe como props la funcion handleShowModal para cerrar el modal. */
const EditProfileImage = ({handleShowModal, profileImage, setProfileData}) => {
    const inputFile = useRef(null);
    const [file, setFile] = useState(null);
    const [preViewImage, setPreViewImage] = useState(null);
    const [session, loading] = useSession();//Obtenemos la sesion del usuario. ref: https://next-auth.js.org/getting-started/client#usesession

    const { handleOnUpdateImage, isLoadingRequest } = useHandleEditProfileImageRequest(session.user.email, setProfileData, handleShowModal)
    
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
            })
            setFile(e.target.files[0]);
        }
    }

    //Cuando se guarda se escucha el evento onClick en el boton de guardar, se ejecuta el metodo para subir la imagen a S3 y guardarla.
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
            title={'ACTUALIZAR IMAGEN DE PERFIL'}
            handleShowModal={handleShowModal}
            handleOnSubmit={handleOnSubmit}
            isLoadingRequest={isLoadingRequest}
            idForm={null}>
                <div className={styles.editProfileImage_preViewImage_overFlow}>
                    <div className={styles.editProfileImage_preViewImage_container}>
                        <div className={styles.editProfileImage_preViewImage}>
                            <Image 
                            unoptimized={preViewImage !== null && true} 
                            className={styles.editProfileImage_preViewImage_rounded} 
                            src={preViewImage == null ? profileImage : preViewImage.file} 
                            layout='fill' objectFit='cover' alt='Imagen de perfil'
                            />
                        </div>
                        <span>Tamaño y resolución recomendada 1080x1080px - No debe pesar más de 5Mb</span>
                        <div onClick={handleOnClickInputFile} className={styles.editProfileImage_preViewImage_button}>
                            <input onChange={(e) => {handleOnChangeInputFile(e)}} ref={inputFile} type='file' hidden/>
                            <SecondaryButtonProfile name={'Cargar imagen'}/>
                        </div>
                    </div>
                </div>
            </LayoutModalCard>
        </LayoutModal>
    )
}

export default EditProfileImage;