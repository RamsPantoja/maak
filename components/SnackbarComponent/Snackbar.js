import React from 'react';
import styles from './styles/Snackbar.module.css';
import cn from 'classnames';

//Componente snackbarNotification para mostrar feedback al usuario.
const Snackbar = React.forwardRef(({variant, message}, ref) => {
    return (
        <div ref={ref} className={
            //classnames como cn, me permite condicionar multiples class de css y elegir una dependiendo la condicion.
            cn({
                [styles.successSnackbar]: variant === 'success',
                [styles.errorSnackbar]: variant === 'error',
            })
        }>
            <span>{message}</span>
        </div>
    )
});

Snackbar.displayName = 'Snackbar';

export default Snackbar;