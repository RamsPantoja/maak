import React from 'react';
import { Fragment } from 'react';
import styles from './styles/MainButton.module.css';

//Componentes
import CircularProgress from '@material-ui/core/CircularProgress';

const MainButton = ({isLoadingRequest, name}) => {
    return (
        <Fragment>
            { isLoadingRequest ? <div className={styles.circularProgress_center}><CircularProgress size={46.7} style={{color: '#f04a23'}}/></div>
                : <button className={styles.mainButton}>{name}</button>
            }
        </Fragment>
    )
}

export default MainButton;