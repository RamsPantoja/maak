import React from 'react'
import styles from './styles/EditProfileForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { editProfileValidationSchema } from './Validators/EditProfileValidationSchema';

//Componentes
import FormInputGlass from '../FormInputComponent/FormInputGlass';
import LayoutModal from '../layout/LayoutModal';
import MainButtonProfile from '../ButtonsComponent/MainButtonProfile';

//hooks
import useHandleEditProfileRequest from './hooks/useHandleEditProfileRequest';
import LayoutModalCard from '../layout/LayoutModalCard';

const EditProfileForm = ({handleShowModal, profileData, setProfileData}) => {
    //Manejador de peticion PUT al backend para actualizar los datos del perfil.
    const { isLoadingRequest, handleOnSubmit} = useHandleEditProfileRequest(handleShowModal, setProfileData);

    /*useForm permite implementar un manejador de formularios para una buena optimizacion de renderizado.
    Este hook viene de la libreria react-hook-form, la cual es muy buena para la administracion de formularios.
    ref: https://react-hook-form.com */
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(editProfileValidationSchema)
    });

    return (
        <LayoutModal>
            <LayoutModalCard
            title={'EDITAR INFORMACIÓN BÁSICA DE PERFIL'}
            idForm={'editProfileForm'}
            handleShowModal={handleShowModal}
            handleOnSubmit={null}
            isLoadingRequest={isLoadingRequest}>
                <form id='editProfileForm' onSubmit={handleSubmit(handleOnSubmit)} className={styles.editProfileForm_form}>
                    <div className={styles.editProfileForm_form_section}>
                        <h5>DESCRIPCIÓN</h5>
                        <textarea defaultValue={profileData?.descripcion} {...register('descripcion')} placeholder='Agregar descripción' className={styles.editProfileForm_form_section_textArea}></textarea>
                    </div>
                    <span className={styles.editProfileForm_form_line}></span>
                    <div className={styles.editProfileForm_form_section}>
                        <h5>INFORMACIÓN DE CONTACTO</h5>
                        <div className={styles.editProfileForm_form_section_inputs}>
                            <FormInputGlass value={profileData.nombre} type={'text'} error={errors?.nombre} field={'nombre'} register={register} label={'Nombre'}/>
                            <FormInputGlass value={profileData.empresa} type={'text'} error={errors?.empresa} field={'empresa'} register={register} label={'Empresa'}/>
                            <FormInputGlass value={profileData.ocupacion} type={'text'} error={errors?.ocupacion} field={'ocupacion'} register={register} label={'Ocupación'}/>
                            <FormInputGlass value={profileData.ubicacion} type={'text'} error={errors?.ubicacion} field={'ubicacion'} register={register} label={'Ubicación'}/>
                        </div>
                    </div>
                    <span className={styles.editProfileForm_form_line}></span>
                    <div className={styles.editProfileForm_form_section}>
                        <h5>ENLANCES DE CONTACTO</h5>
                        <div className={styles.editProfileForm_form_section_inputs}>
                            <FormInputGlass value={profileData.enlacesContacto?.sitioWeb} type={'text'} error={errors?.paginaweb} field={'paginaweb'} register={register} label={'URL Página web'}/>
                            <FormInputGlass value={profileData.enlacesContacto?.facebook} type={'text'} error={errors?.facebookLink} field={'facebookLink'} register={register} label={'Facebook'}/>
                            <FormInputGlass value={profileData.enlacesContacto?.instagram} type={'text'} error={errors?.instagramLink} field={'instagramLink'} register={register} label={'Instagram'}/>
                            <FormInputGlass value={profileData.enlacesContacto?.twitter} type={'text'} error={errors?.twitterLink} field={'twitterLink'} register={register} label={'Twitter'}/>
                            <FormInputGlass value={profileData.enlacesContacto?.linkedin} type={'text'} error={errors?.linkedInLink} field={'linkedInLink'} register={register} label={'URL LinkedIn'}/>
                        </div>
                    </div>
                </form>
            </LayoutModalCard>
        </LayoutModal>
    )
}

export default EditProfileForm;