import React from 'react';
import styles from './styles/ResetPasswordForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

//Componentes
import FormInput from '../FormInputComponent/FormInput';
import MainButton from '../ButtonsComponent/MainButton';
import Link from 'next/link'

//Schema de validation para el formulario de ResetPassword.
const resetPasswordValidationSchema = yup.object().shape({
    newPassword: yup.string().required().matches(/^[a-z\dñ][a-z\d\sñ]{6,}[a-z\dñ]$/i),
    reapetPassword: yup.string().required()
});

//Formulario que se muestra para restablecer la contraseña del usuario.
const ResetPasswordForm = ({passwordMatch, isLoadingRequest, handleOnSubmit}) => {

    /*useForm permite implementar un manejador de formularios para una buena optimizacion de renderizado.
    Este hook viene de la libreria react-hook-form, la cual es muy buena para la administracion de formularios.
    ref: https://react-hook-form.com */
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(resetPasswordValidationSchema),
    });

    const errorMessage = passwordMatch ? null : <span className={styles.errorMessage}>Las contraseñas no coinciden.</span>;

    return (
        <form className={styles.resetPassword_card_form} onSubmit={handleSubmit(handleOnSubmit)}>
            {errorMessage}
            <FormInput label={'Nueva contraseña'} register={register} field={'newPassword'} type={'password'} error={errors?.newPassword}/>
            <FormInput label={'Repetir contraseña'} register={register} field={'reapetPassword'} type={'password'} error={errors?.reapetPassword}/>
            <div className={styles.resetPassword_card_form_button}>
                <MainButton name={'ENVIAR'} isLoadingRequest={isLoadingRequest}/>
            </div>
            <Link href='/sign_in'><a>Regresar a inicio de sesión</a></Link>
        </form>
    )
}

export default ResetPasswordForm;