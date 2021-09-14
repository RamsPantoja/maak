import React from 'react';
import styles from './styles/FormInputGlass.module.css';

/*Renderiza un inputForm estilo glass, el cual recibe como los siguientes parametros:
error: Error del input, este error viene de hook-react-form,
label: Etiqueda del input, ejemplo: Nombre,
register: Manejador del input, este obtiene el valor del input. Esta funcion viene de hook-react-form.
field: Campo especifico de input, usado para validar el valor del input con la liberia yup, ejemplo: 'nombre'.
type: Tipo de input, ejemplo: 'text'*/

const FormInputGlass = ({error, label, register, field, type, value}) => {
    return (
        <div className={styles.formInputGlass_container}>
            <span className={styles.errorInputLabel}>{error?.type === 'required' && 'Campo obligatorio'}</span>
            <input {...register(field)} type={type} defaultValue={value ? value : ''} className={error ? styles.formInputGlass_input_error : styles.formInputGlass_input} placeholder=' '/>
            <label className={styles.formInputGlass_label}><span>{label}</span></label>
        </div>
    )
}

export default FormInputGlass;