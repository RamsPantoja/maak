import React, { useState } from 'react';
import styles from './styles/ProfileMyDataForm.module.css';
import { profileMyAccountDataValidationSchema } from './Validators/ProfileMyAccountDataValidation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//Componentes
import FormInputGlass from '../FormInputComponent/FormInputGlass';
import MainButtonProfile from '../ButtonsComponent/MainButtonProfile';
import useHandleEditAccountDataRequest from './hooks/useHandleEditAccountDataRequest';


const ProfileMyDataForm = ({inputs, setAccountData}) => {
    const { handleOnSubmit, isLoadingRequest} = useHandleEditAccountDataRequest(setAccountData);
    /*useForm permite implementar un manejador de formularios para una buena optimizacion de renderizado.
    Este hook viene de la libreria react-hook-form, la cual es muy buena para la administracion de formularios.
    ref: https://react-hook-form.com */
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(profileMyAccountDataValidationSchema)
    });

    return (
        <div className={styles.profileForm_container}>
            <form id='profileMyDataForm' onSubmit={handleSubmit(handleOnSubmit)} className={styles.profileForm}>
                { inputs.map((input, index) => {
                    return (
                        <div key={index} className={styles.profileForm_input}>
                            <FormInputGlass value={input.value} error={errors?.[input.field]} type={input.type} register={register} field={input.field} label={input.label}/>
                        </div>
                    )
                })}
            </form>
            <div className={styles.profileForm_buttonSubmit}>
                <MainButtonProfile isLoadingRequest={isLoadingRequest} name={'Guardar'} formId={'profileMyDataForm'}/>
            </div>
        </div>
    )
}

export default ProfileMyDataForm;