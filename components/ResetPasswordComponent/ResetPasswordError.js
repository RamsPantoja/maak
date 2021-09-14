import React from 'react';
import Link from 'next/link';
import styles from './styles/ResetPasswordError.module.css';

const ResetPasswordError = () => {
    return (
        <div className={styles.resetPassword_error}>
            <span className="material-icons-round">error</span>
            <p>No es posible restablecer la contraseña</p>
            <p>Intentalo de nuevo o solicita un nuevo correo para restablecer tu contraseña</p>
            <Link href='/forgot_password'><a className={styles.resetPassword_error_newEmail}>Solicitar un nuevo correo</a></Link>
            <p>¿Tienes problemas para restablecer tu contraseña?</p>
            <Link href='/about/support'><a className={styles.support}>Soporte</a></Link>
        </div>
    )
}

export default ResetPasswordError;