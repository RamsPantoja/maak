import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/SocialNetworks.module.css';

//Este componente renderiza los iconos de las redes sociales.
const SocialNetworks = () => {
    return (
        <Fragment>
            <div className={styles.socialNetworks}>
                <Link href='https://www.instagram.com/r3DMEXICO/'>
                    <a><Image src='/instagram-icon.svg' width={25} height={25} alt='instagram icon'/></a>
                </Link>
            </div>
            <div className={styles.socialNetworks}>
                <Link href='https://twitter.com/R3DMexico'>
                    <a><Image src='/twitter-icon.svg' width={25} height={25} alt='twitter icon'/></a>
                </Link>
            </div>
            <div className={styles.socialNetworks}>
                <Link href='https://www.facebook.com/R3DMexico/?_rdc=1&_rdr'>
                    <a><Image src='/facebook-icon.svg' width={25} height={25} alt='facebook icon'/></a>
                </Link>
            </div>
        </Fragment>
    )
}

export default SocialNetworks;