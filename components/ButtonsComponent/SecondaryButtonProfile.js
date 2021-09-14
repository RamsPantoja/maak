import React from 'react';
import { Fragment } from 'react';
import styles from './styles/SecondaryButtonProfile.module.css';

const SecondaryButtonProfile = ({name}) => {
    return (
        <Fragment>
            <button className={styles.secondaryButtonProfile}>{name}</button>
        </Fragment>
    )
}

export default SecondaryButtonProfile;