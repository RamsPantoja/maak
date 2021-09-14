import React, { useState } from 'react';
import { signInValidationSchema } from './SignInValidationSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './styles/SignInForm.module.css';
import Link from 'next/link';
import { signIn, getSession } from 'next-auth/client'

//Componentes
import FormInput from '../FormInputComponent/FormInput';
import { useRouter } from 'next/router';
import MainButton from '../ButtonsComponent/MainButton';

//Componente que renderiza el formulario para iniciar sesión.
const SignInForm = () => {
    const router = useRouter();// acceso al router de la app.

    const [wasAnError, setWasAnError] = useState(false);
    const [isLoadingRequest, setIsloadingRequest] = useState(false);

    /*useForm permite implementar un manejador de formularios para una buena optimizacion de renderizado.
    Este hook viene de la libreria react-hook-form, la cual es muy buena para la administracion de formularios.
    ref: https://react-hook-form.com */
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signInValidationSchema)
    });
    
    //Informacion del formulario para ser enviada al backend.
    const onSubmit = (data) => {
        setIsloadingRequest(true); //Actualiza el valor a true de isLoadingRequest para posteriormente motrar el componente CircularProgress.

        //Esta funcion permite enviar los datos introducidos por el usuario al manejador de inicio de sesión: rootdir/api/auth/[...nextauth].js
        signIn('credentials', {redirect: false, usuario: data.email, contrasena: data.password })
        .then(async (res) => {
            const session = await getSession();
            if (!res.ok) {
                setWasAnError(true);
                setIsloadingRequest(false); //Si existe algun error en los datos introducidos por el usuario.
            }

            if (!session?.user.registeredProfile) {
                router.push('/r3d/new_profile'); // redirige al usuario a la pagina de inicio si se logea correctamente.
            } else {
                localStorage.setItem('profile', session?.user.mainProfile)
                switch (session?.user.mainProfile) {
                    case 'MIR3D':
                        return router.push('/my_profile');
                    case 'maker':
                        return router.push('/maker/studio');
                    case 'manufacturer':
                        return router.push('/manufacturer/factory');
                    default:
                        return router.push('/');
                }
            }
        });
    }

    //El mensaje de error para mostrar.
    const errorMessage = wasAnError ? <span className={styles.errorMessage}>El correo electrónico o contraseña son incorrectos.</span> : null;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.signInForm}>
            {/*El componente FormInput renderiza el input del formulario pasandole las props, y 
            tambien se le pasa la prop register, la cual se encarga de validar el input.*/}
            {errorMessage}
            <FormInput label={'Correo Electrónico'} register={register} field={'email'} type={'email'} error={errors?.email}/>
            <FormInput label={'Contraseña'} register={register} field={'password'} type={'password'} error={errors?.password}/>
            <div className={styles.signInForm_button}>
                <MainButton name={'ENVIAR'} isLoadingRequest={isLoadingRequest}/>
            </div>
            {/*Links a las opciones de la cuenta del usuario.*/}
            <div className={styles.links_accountOptions}>
                <Link href='/forgot_password'><a className={styles.link}>Olvidé mi contraseña</a></Link>
                <Link href='/sign_up'><a className={styles.link}>No tengo cuenta aún</a></Link>
            </div>
        </form>
    )
}

export default SignInForm;