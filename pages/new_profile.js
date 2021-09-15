import React, { useEffect, useState } from 'react';
import styles from './styles/new_profile.module.css';
import { getSession } from 'next-auth/client';

//Componentes
import LayoutNewProfile from '../components/layout/LayoutNewProfile';
import ChooseNewProfile from '../components/NewProfileSectionComponent/ChooseNewProfile';
import Stepper from '../components/NewProfileSectionComponent/Stepper';
import useHandleTranslateNewProfileSections from '../components/NewProfileSectionComponent/hooks/useHandleTranslateNewProfileSections';
import useHandleGetData from '../components/NewProfileSectionComponent/hooks/useHandleGetData';
import UploadImageProfile from '../components/NewProfileSectionComponent/UploadImageProfile';
import ContactInformationProfile from '../components/NewProfileSectionComponent/ContactInformationProfile';
import Head from 'next/head';

const NewProfile = ({ session }) => {
  const [isProfileRegistered, setIsProfileRegistered] = useState(null);
  const [isLocalStorageValue, setIsLocalStorageValue] = useState(false);

  const {
    typeOfProfile,
    imageFile,
    getProfileSelected,
    getImageSelected
  } = useHandleGetData(); //Manejador para obtener los datos seleccionados por el usuario.

  const {distanceX, slideSections, section} = useHandleTranslateNewProfileSections();//Hook para mover las secciones.

  //Obtiene la key "profileRegistered" para validar si puede registrar su perfil.
  useEffect(() => {
    setIsProfileRegistered(localStorage.getItem('profileRegistered'));
    setIsLocalStorageValue(true);
  }, []);


  if (!isLocalStorageValue) {
    return (
      <LayoutNewProfile session={session}>
        <Head>
          <title>R3D - Nuevo Perfil</title>
        </Head>
      </LayoutNewProfile>
    )
  }

  //Si el usuario ya ha registrado su perfil, muestra lo siguiente.
  if (isProfileRegistered) {
    return (
      <LayoutNewProfile session={session}>
        <Head>
          <title>R3D - Nuevo Perfil</title>
        </Head>
        <p className={styles.newProfile_errorPage}>Ya no se encuentra disponible el recurso solicitado :(</p>
      </LayoutNewProfile>
    )
  } else {
    return (
      <LayoutNewProfile session={session}>
        <Head>
          <title>R3D - Nuevo Perfil</title>
        </Head>
        <div className={styles.newProfile_container}>
          <div className={styles.newProfile_container_steps}>
            <ChooseNewProfile  getProfileSelected={getProfileSelected} distanceX={distanceX} slideSections={slideSections}/>
            <UploadImageProfile distanceX={distanceX} getImageSelected={getImageSelected} slideSections={slideSections}/>
            <ContactInformationProfile distanceX={distanceX} imageFile={imageFile} typeOfProfile={typeOfProfile} session={session}/>
          </div>
          <Stepper section={section} slideSections={slideSections}/>
        </div>
      </LayoutNewProfile>
    )
  }
}

//Esta funcion valida si el usuario esta logeado o no.
export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });

  if (!session && req) {
    return {
      redirect: {
        destination: '/sign_in',
        permanent: false
      }
    }
  } else if (session.user.registeredProfile) {
    switch (session.user.mainProfile) {
      case 'MIR3D':
        return {
          redirect: {
            destination: '/my_profile'
          }
        }
      case 'maker':
        return {
          redirect: {
            destination: '/maker/studio'
          }
        }
      case 'manufacturer':
        return {
          redirect: {
            destination: '/manufacturer/factory'
          }
        }
      default:
        return {
          redirect: {
            destination: '/'
          }
        }
    }
  }

  return {
    props: {
      session,
    }
  }
}

export default NewProfile;