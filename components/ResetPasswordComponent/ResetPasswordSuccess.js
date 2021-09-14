import React from 'react';
import styles from './styles/ResetPasswordSuccess.module.css';
import Link from 'next/link'

//Componente que se muestra cuando la contraseña ha sido restablecida correctamente.
const ResetPasswordSuccess = () => {
    return (
        <div className={styles.resetPassword_card_grid_done}>
            <span className="material-icons-round">check_circle</span>
            <p>¡Contraseña restablecida!</p>
            <p>
                Para regresar a inicio de sesión. Haz click en el botón de abajo
            </p>
            <Link href='/sign_in'><a>INICIAR SESIÓN</a></Link>
        </div>
    )
}

export default ResetPasswordSuccess;