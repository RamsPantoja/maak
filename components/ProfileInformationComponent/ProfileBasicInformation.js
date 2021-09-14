import styles from './styles/ProfileBasicInformation.module.css';
import { useRouter } from 'next/router';

//Componentes
import BackgroundImageProfile from './BackgroundImageProfile';
import ProfileImage from './ProfileImage';
import MainButtonProfile from '../ButtonsComponent/MainButtonProfile';
import Link from 'next/link';

const ProfileBasicInformation = ({handleOnClickShowModal, profileData}) => {

    //Obtenemos todos los datos perfil.
    const {
        nombre,
        descripcion,
        empresa,
        ubicacion,
        ocupacion,
        imagenPerfil,
        imagenPortada,
        enlacesContacto,
        blurDataURL
    } = profileData;

    //Obtiene el dominio de la url del sitioweb agregado por el usuario.
    const getHostName = (url) => {
        if (url !== '/' && url !== null && url !== '') {
            const { hostname } = new URL(url);
            return hostname;
        }
    }

    return (
        <div className={styles.profileBasicInformation}>
            <BackgroundImageProfile handleOnClickShowModal={handleOnClickShowModal} backgroundImage={imagenPortada} blurDataURL={blurDataURL}/>
            <div className={styles.profileBasicInformation_inf}>
                <ProfileImage handleOnClickShowModal={handleOnClickShowModal} profileImage={imagenPerfil}/>
                <h4>{nombre}</h4>
                <p>{descripcion !== '' && descripcion !== null ? descripcion : 'Descripción de perfil'}</p>
                <div className={styles.profileBasicInformation_inf_basicData}>
                    <div className={styles.profileBasicInformation_inf_basicData_item}>
                        <span className="material-icons-round">work</span>
                        <span>{ocupacion}</span>
                    </div>
                    <div className={styles.profileBasicInformation_inf_basicData_item}>
                        <span className="material-icons-round">business</span>
                        <span>{empresa !== null && empresa !== '' ? empresa : 'Empresa'}</span>
                    </div>
                    <div className={styles.profileBasicInformation_inf_basicData_item}>
                        <span className="material-icons-round">location_on</span>
                        <span>{ubicacion}</span>
                    </div>
                </div>
                <div className={styles.profileBasicInformation_inf_socialNetworks}>
                    <a href={`https://twitter.com/${enlacesContacto.twitter}`} rel='noreferrer' target='_blank'>
                        <svg 
                        className={styles.socialNetworkIcons}
                        display={enlacesContacto.twitter !== '' ? 'block' : 'none'} 
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" version="1.0" viewBox="0 0 512 512" width="288" height="288">
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                    </a>
                    <a href={`https://www.facebook.com/${enlacesContacto.facebook}`} rel='noreferrer' target='_blank'>
                        <svg
                        className={styles.socialNetworkIcons}
                        display={enlacesContacto.facebook !== '' ? 'block' : 'none'}
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" version="1.0" viewBox="0 0 264 512" width="288" height="288">
                            <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                        </svg>
                    </a>
                    <a href={`https://www.instagram.com/${enlacesContacto.instagram}`} rel='noreferrer' target='_blank'>
                        <svg 
                        className={styles.socialNetworkIcons}
                        display={enlacesContacto.instagram !== '' ? 'block' : 'none'}
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" version="1.0" viewBox="0 0 448 512" width="288" height="288">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>
                    </a>
                    <a href={enlacesContacto.linkedin} rel='noreferrer' target='_blank'>
                        <svg 
                        className={styles.socialNetworkIcons}
                        display={enlacesContacto.linkedin !== '' ? 'block' : 'none'}
                        version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
                            <g id="layer1">
                                <path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path>
                            </g>
                        </svg>
                    </a>
                </div>
                <Link href={enlacesContacto.sitioWeb}><a target='_blank'>{getHostName(enlacesContacto.sitioWeb)}</a></Link>
            </div>
            <div className={styles.profileBasicInformation_buttonToEdit} onClick={() => {handleOnClickShowModal('editProfileForm')}}>
                <MainButtonProfile name={'Editar'}/>
            </div>
        </div>
    )
}

export default ProfileBasicInformation;