import React, { useRef } from 'react';
import { Fragment } from 'react';
import styles from './styles/Profile.module.css';
import Image from 'next/image';

//hooks
import useHandleShowDescription from './hooks/useHandleShowDescription';

//Componete que muestra el tipo de perfil con sus caracteristicas, recibe las siguientes props para ser renderizado.
const Profile = ({text, text1, text2, title, imgSource, getProfileSelected, slideSections, profile}) => {
    const box = useRef(null);//Hace referencia a la caja de description.
    const expandIcons = useRef(null); //Hace referencia a los iconos de expandir
    //Manejador para desplegar la caja de description del perfil.
    const { handleOnClick, showDescription } = useHandleShowDescription(expandIcons.current, box.current);

    const handleOnClickProfileSelected = (profile) => {
        getProfileSelected(profile);
        slideSections('uploadImage');
    }

    return (
        <Fragment>
            <li 
            className={styles.profile}>
                <div className={styles.profile_flexContent}>
                    <div onClick={() => {handleOnClickProfileSelected(profile)}} className={styles.profile_flexContent_title}>
                        <Image src={imgSource} alt='isotipo r3d' width={60} height={60} priority={true}/>
                        <p>{title}</p>
                    </div>
                    <div ref={expandIcons} className={styles.profile_flexContent_expand}>
                        { showDescription ? <span onClick={() => {handleOnClick(box.current)}} className="material-icons-round">expand_less</span> 
                            : <span onClick={() => {handleOnClick(box.current)}} className="material-icons-round">expand_more</span>
                        }
                    </div>
                </div>
                <div ref={box} className={styles.profile_itemDescription}>
                    <p>
                        Al seleccionar este perfil, 
                        podrás <span className={styles.profile_itemDescription_textFocus}>{text}</span>.
                        <span className={styles.profile_itemDescription_textFocus}> R3D</span> te conecta con <span className={styles.profile_itemDescription_textFocus}>{text1} </span>
                        y <span className={styles.profile_itemDescription_textFocus}>{text2}</span> <span className={styles.profile_itemDescription_textFocus_important}>para desarrollar y 
                        fabricar productos bajo demanda.</span>
                    </p>
                </div>
            </li>
        </Fragment>
    )
}

export default Profile;