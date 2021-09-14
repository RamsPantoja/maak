import React, { useState } from 'react';
import styles from './styles/SignUpForm.module.css';
import { useForm } from 'react-hook-form';
import Link from 'next/link'
import { signUpValidationSchema } from './SignUpValidationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import axiosInstance from '../../utils/axios_instance';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router'

//Componente
import FormInput from '../FormInputComponent/FormInput';
import Snackbar from '../SnackbarComponent/Snackbar';
import MainButton from '../ButtonsComponent/MainButton';

const SignUpForm = ()  => {
    const router = useRouter(); //Accede al objeto router de la app.
    const { enqueueSnackbar } = useSnackbar(); //Accede al objeto nitisack.
    const [isLoadingRequest, setIsLoadingRequest] = useState(false);

    /*useForm permite implementar un manejador de formularios para una buena optimizacion de renderizado.
    Este hook viene de la libreria react-hook-form, la cual es muy buena para la administracion de formularios.
    ref: https://react-hook-form.com */
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signUpValidationSchema)
    });

    //Informacion del formulario para ser enviada al backend.
    const onSubmit = (data) => {
        //Actualiza el valor a true de isLoadingRequest para posteriormente motrar el componente CircularProgress.
        setIsLoadingRequest(true);

        //Realiza la peticion al enpoint /usuario para registrarlo junto con los datos.
        axiosInstance.post('/usuario', data)
        .then((res) => {
            //isLoadingRequest a false para dejar de mostrar el componente CircularProgress.
            setIsLoadingRequest(false);
            //Envia el cliente a la pagina de confirmation de email.
            if (res.status == 200 && res.data.status) {
                router.push(`/sign_up/confirmation_email?email=${res.data.data[0].correo}`)
            }
            
        })
        .catch((error) => {
            //isLoadingRequest a false para dejar de mostrar el componente CircularProgress.
            setIsLoadingRequest(false)
            //Muestra un notification snackbar con el error.
            if (error) {
                enqueueSnackbar('',{
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right'
                    },
                    // eslint-disable-next-line react/display-name
                    content: () => {
                        return (
                            <Snackbar variant={'error'} message={error.response.data.mensaje[0]}/>
                        )
                    }
                });
            }
        })
    }

    return (
        <div className={styles.signUpForm_container}>
            <h4 className={styles.signUpForm_title}>REGISTRO</h4>
            {/*handleSubmit validara los inputs antes de invocar al metodo onSubmit.*/}
            <form onSubmit={handleSubmit(onSubmit)} className={styles.signUpForm}>
                {/*El componente SignFormInput renderiza el input del formulario pasandole las props, y 
                tambien se le pasa la prop register, la cual se encarga de validar el input.*/}
                <FormInput label={'Nombre'} register={register} field={'nombre'} type={'text'} error={errors?.nombre}/>
                <FormInput label={'Apellidos'} register={register} field={'apellidos'} type={'text'} error={errors?.apellidos}/>
                <FormInput label={'Correo Electrónico'} register={register} field={'correo'} type={'email'} error={errors?.correo}/>
                <FormInput label={'Contraseña'} register={register} field={'contrasena'} type={'password'} error={errors?.contrasena}/>
                {/*En esta parte simplemente se agrego un button check para aceptar los terminos y condiciones, e igual
                se le pasa register como prop para validar el input*/}
                <div className={styles.signUpForm_inputRadio_container}>
                    <input className={styles.signUpForm_inputRadio} type='radio' name='agreeTerms' {...register('agreeTerms')}/>
                    <label className={styles.signUpForm_inputRadio_label} htmlFor='agreeTerms'>
                        Acepto la <Link href='/'><a className={styles.signUpForm_linksToTerms}>Política de Privacidad</a></Link> y los <Link href='/'><a className={styles.signUpForm_linksToTerms}>Términos de uso</a></Link>
                    </label>
                    <span className={styles.signUpForm_inputError}>{errors.agreeTerms?.type === 'typeError' && 'Campo obligatorio'}</span>
                </div>
                {/*Button submit para enviar los datos al backend, y realizar el registro ó CircularProgress si la peticion al endpoint: 
                /usuario aun no se resulve. */}
                <MainButton isLoadingRequest={isLoadingRequest} name={'ENVIAR'}/>
                {/*Links a las opciones de la cuenta del usuario.*/}
                <div className={styles.links_accountOptions}>
                    <Link href='/forgot_password'><a className={styles.link}>Olvidé mi contraseña</a></Link>
                    <Link href='/sign_in'><a className={styles.link}>Ya estoy registrado</a></Link>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;