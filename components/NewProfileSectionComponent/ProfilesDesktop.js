import React, { useContext, useRef } from 'react';
import Image from 'next/image';
import styles from './styles/ProfilesDesktop.module.css';
import { types } from '../../store/storeReducer';

//hooks
import useHandleShowDescription from './hooks/useHandleShowDescription';
import { StoreContext } from '../../store/StoreProvider';

//Componente para mostrar los perfiles disponibles a seleccionar para desktop.
const ProfilesDesktop = ({getProfileSelected, slideSections}) => {
    const myR3d = useRef(null);//Hace referencia a la caja de description de MI R3D
    const maker = useRef(null);//Hace referencia a la caja de description de Creador
    const manufacturer = useRef(null);//Hace referencia a la caja de description de Fabricante
    const [store, dispatch] = useContext(StoreContext); //Accede al contexto.

    //Manejador para mostrar las cajas de description cuando se hace hover sobre perfil a seleccionar.
    const { handleOnMouseOver, handleOnMouseLeave } = useHandleShowDescription();

    /*Funcion que se ejecuta cuando el usuario selecciona un tipo de perfil, se le pasa por parametro el perfil.
    Se ejecuta dos funciones, las cuales son recibidas como props del componente.*/
    const handleOnClickProfile = (profile) => {
        slideSections('uploadImage'); //Mueve a la seccion para cargar la imagen de perfil.
        getProfileSelected(profile); //Obtiene el perfil seleccionado.
        localStorage.setItem('profile', profile); //Colocamos el perfil seleccionado en el localStorage.

        //Actualizamos la variable de estado global "profile", con el perfil seleccionado.
        dispatch({
            type: types.onSelectProfile,
            payload: profile
        });
    }

    return (
        <ul className={styles.profilesDesktop_profiles}>
            <li 
            className={styles.profilesDesktop_profiles_item} 
            onMouseOver={() => {handleOnMouseOver(myR3d.current)}} 
            onMouseLeave={() => {handleOnMouseLeave(myR3d.current)}}
            onClick={() => {handleOnClickProfile('MIR3D')}}>
                <Image src='/seleccionar-mir3d.svg' alt='isotipo r3d logo' width={60} height={60} priority={true}/>
                <span>MI R3D</span>
                <div ref={myR3d} className={styles.profilesDesktop_profiles_itemDescription_mir3d}>
                    <i></i>
                    <p>
                        Al seleccionar este perfil, 
                        podrás <span className={styles.profilesDesktop_textFocus}>Iniciar proyectos</span>.
                        <span className={styles.profilesDesktop_textFocus}> R3D</span> te conecta con <span className={styles.profilesDesktop_textFocus}>Creadores </span>
                        y <span className={styles.profilesDesktop_textFocus}>Fabricantes</span> <span className={styles.profilesDesktop_textFocus_important}>para desarrollar y 
                        fabricar productos bajo demanda.</span>
                    </p>
                </div>
            </li>
            <li 
            className={styles.profilesDesktop_profiles_item}
            onMouseOver={() => {handleOnMouseOver(maker.current)}} 
            onMouseLeave={() => {handleOnMouseLeave(maker.current)}}
            onClick={() => {handleOnClickProfile('MAKER')}}>
                <Image src='/seleccionar-creador.svg' alt='isotipo r3d logo' width={60} height={60} priority={true}/>
                <span>CREADOR</span>
                <div ref={maker} className={styles.profilesDesktop_profiles_itemDescription_maker}>
                    <i></i>
                    <p>
                        Al seleccionar este perfil, 
                        podrás <span className={styles.profilesDesktop_textFocus}>Desarrollar proyectos</span>.
                        <span className={styles.profilesDesktop_textFocus}> R3D</span> te conecta con <span className={styles.profilesDesktop_textFocus}>Clientes</span> y 
                        <span className={styles.profilesDesktop_textFocus}> Fabricantes</span> <span className={styles.profilesDesktop_textFocus_important}>para desarrollar y
                        fabricar productos bajo demanda.</span>
                    </p>
                </div>
            </li>
            <li 
            className={styles.profilesDesktop_profiles_item}
            onMouseOver={() => {handleOnMouseOver(manufacturer.current)}} 
            onMouseLeave={() => {handleOnMouseLeave(manufacturer.current)}}
            onClick={() => {handleOnClickProfile('MANUFACTURER')}}>
                <Image src='/seleccionar-fabricar.svg' alt='isotipo r3d logo' width={60} height={60} priority={true}/>
                <span>FABRICANTE</span>
                <div ref={manufacturer} className={styles.profilesDesktop_profiles_itemDescription_manufacturer}>
                    <i></i>
                    <p>
                        Al seleccionar este perfil, 
                        podrás <span className={styles.profilesDesktop_textFocus}>Fabricar proyectos</span>.
                        <span className={styles.profilesDesktop_textFocus}> R3D</span> te conecta con <span className={styles.profilesDesktop_textFocus}>Clientes</span> y 
                        <span className={styles.profilesDesktop_textFocus}> Creadores</span> <span className={styles.profilesDesktop_textFocus_important}>para desarrollar y
                        fabricar productos bajo demanda.</span>
                    </p>
                </div>
            </li>
        </ul>
    )
}

export default ProfilesDesktop;