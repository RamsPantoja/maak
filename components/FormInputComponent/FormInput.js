import React, { useEffect, useState } from 'react';
import styles from './styles/FormInput.module.css';
import Image from 'next/image';

/*Renderiza un inputForm para los formularios relacionados con el SignIn, el cual recibe como los siguientes parametros:
error: Error del input, este error viene de hook-react-form.,
label: Etiqueda del input, ejemplo: Nombre,
register: Manejador del input, este obtiene el valor del input. Esta funcion viene de hook-react-form.
field: Campo especifico de input, usado para validar el valor del input con la liberia yup, ejemplo: 'nombre'.
type: Tipo de input, ejemplo: 'text'*/

const FormInput = ({label, register, field, type, error}) => {
    const [showPassword, setShowPassword] = useState('password');
    const [showButtonPassword, setShowButtonPassword] = useState(false);
    const [visibilityIcon, setVisibilityIcon] = useState(true);

    //Si el tipo de input es password entonces muestra el icono para visualizar la contraseña.
    useEffect(() => {
        if (type === 'password') {
            setShowButtonPassword(true)
        }
    }, [type]);

    //Actualiza el tipo de input (password ===> text) para el input password y asi visualizar la contraseña.
    const handleShowPassword = () => {
        if (showPassword === 'password') {
            setShowPassword('text');
            setVisibilityIcon(false)
        } else {
            setShowPassword('password');
            setVisibilityIcon(true)
        }
    }

    const icon = visibilityIcon ? <Image src='/visibility_icon.svg' alt='visibility-password' width={24} height={24}/>: <Image src='/no_visibility_icon.svg' alt='no-visiblity-password' width={24} height={24}/>
    
    return (
        <div className={styles.form_inputContainer}>
            <span className={styles.form_inputErrorLabel}>
                {/*Renderiza los diferentes tipos errors para ser mostrados en el formulario.*/}
                {
                error?.type === 'required' && 'Campo obligatorio'
                || error?.type === 'matches' & type === 'password' && 'Mínimo 8 dígitos, sin caracteres especiales'
                || error?.type === 'email' && 'Email no valido'
                || error?.type === 'matches' && 'Sin caracteres especiales'
                }
            </span>  
            <input {...register(field)} 
            name={field} 
            type={type === 'password' ? showPassword : type} 
            className={error ? styles.form_inputError : styles.form_input}/>
            <label htmlFor={field} className={styles.form_inputLabel}><span className={error ? styles.labelError_color : null}>{label}</span></label>
            {/*Si showButtonPassword es verdadero, muestra en el input el icono para mostrar o no, la contraseña.*/}
            {
                showButtonPassword ? <div className={styles.form_showPassword} onClick={handleShowPassword}>{icon}</div> : null
            }
        </div>
    )
}

export default FormInput;