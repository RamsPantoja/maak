import React, { useState } from 'react';
import styles from './styles/ProfileInformation.module.css';

//Componentes
import ProfileMyDataNavbar from './ProfileMyDataSection/ProfileMyDataNarvbar';
import ProfileBasicInformation from './ProfileBasicInformation';
import ProfileAdvancedInformation from './ProfileAdvancedInformation';
import ProfileMyAccountDataSection from "./ProfileMyDataSection/ProfileMyAccountDataSection";
import ProfileMyAddressDataSection from "./ProfileMyDataSection/ProfileMyAddressDataSection";
import ProfileMyPaymentDataSection from "./ProfileMyDataSection/ProfileMyPaymentDataSection";
import EditProfileForm from "./EditProfileForm";
import EditProfileImage from "./EditProfileImage";
import EditProfileBackgroundImage from "./EditProfileBackgroundImage";
import ProfileAddNewAddress from "./ProfileAddNewAddress";

//Hooks
import useHandleShowModal from './hooks/useHandleShowModal';
import useHandleSection from './hooks/useHandleSection';
import ProfileEditAddress from './ProfileEditAddress';
import DeleteAddressWarning from './DeleteAddressWarning';

const ProfileInformation = ({userData}) => {
    const [profileData, setProfileData] = useState(userData.perfil); //Guarda los datos del perfil obtenidos de la api.
    const [accountData, setAccountData] = useState(userData.cuenta); //Guarda los datos de cuenta obtenidos de la api.
    const [addressData, setAddressData] = useState(userData.direcciones);
    const [addressId, setAddressId] = useState(0);
    const { handleOnClickShowModal, whichModal } = useHandleShowModal(); //Hook para mostrar un modal en la pagina.
    
    //Modales que se muestran en la pagina cuando se requiere editar algunos datos.
    const modals = {
        editProfileForm: <EditProfileForm handleShowModal={handleOnClickShowModal} profileData={profileData} setProfileData={setProfileData}/>,
        editProfileImage: <EditProfileImage handleShowModal={handleOnClickShowModal} profileImage={profileData.imagenPerfil} setProfileData={setProfileData}/>,
        editProfileBackgroundImage: <EditProfileBackgroundImage handleShowModal={handleOnClickShowModal} setProfileData={setProfileData} backgroundImage={profileData.imagenPortada}/>,
        profileAddNewAddress: <ProfileAddNewAddress handleShowModal={handleOnClickShowModal} setAddressData={setAddressData} addressData={addressData} />,
        profileEditAddress: <ProfileEditAddress addressId={addressId} handleShowModal={handleOnClickShowModal} setAddressData={setAddressData} addressData={addressData}/>,
        deleteAddressWarning: <DeleteAddressWarning handleShowModal={handleOnClickShowModal} addressId={addressId} setAddressData={setAddressData} addressData={addressData}/>,
        noModal: null
    }

    /*Componentes de seccion para el apartado de "Mis datos".
    Estos componentes son renderizados en el apartado "Mis datos" cuando el usuario selecciona una section
    en el navbar, "Datos de cuenta", "Pagos" o "Direcciones"*/
    const sections = {
        myDataSection: <ProfileMyAccountDataSection accountData={accountData} setAccountData={setAccountData}/>,
        myPaymentDataSection: <ProfileMyPaymentDataSection/>,
        myAddressDataSection: <ProfileMyAddressDataSection handleOnClickShowModal={handleOnClickShowModal} addressData={addressData} setAddressId={setAddressId}/>
    }

    //Hook para mostrar las diferentes secciones en el apartada mis datos de my_profile.
    const { handleOnClickSection, whichSection } = useHandleSection('myDataSection'); 
    
    return (
        <div className={styles.profileInformation}>
            { modals[whichModal] }
            <ProfileBasicInformation handleOnClickShowModal={handleOnClickShowModal} profileData={profileData}/>
            <ProfileAdvancedInformation 
            header={<h4>Mis datos</h4>}
            navBarComponent={
                <ProfileMyDataNavbar
                    handleOnClickSection={handleOnClickSection}
                    whichSection={whichSection}/>
                }>
                { sections[whichSection]}
            </ProfileAdvancedInformation>
        </div>
    )
}

export default ProfileInformation;