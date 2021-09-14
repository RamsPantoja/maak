import React from 'react';
import { Fragment } from 'react';
import styles from './styles/MainButtonProfile.module.css';

//Componente de Material-UI
import CircularProgress from '@material-ui/core/CircularProgress';

//Renderiza un buton para las secciones relacionadas al perfiles.
const MainButtonProfile = ({name, formId, isLoadingRequest}) => {
    return (
        <Fragment>
            {
                isLoadingRequest ? <div className={styles.mainButtonProfile_circularProgress}><CircularProgress size={40} style={{color: '#f04a23'}}/></div> 
                    : <button type='submit' form={formId} className={styles.mainButtonProfile}>{name}</button>
            }
        </Fragment>
    )
}

export default MainButtonProfile;
