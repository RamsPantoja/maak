import { Fragment, useState } from 'react';
import EditProfileBackgroundImage from '../../ProfileInformationComponent/EditProfileBackgroundImage';

//Componentes
import EditProfileForm from '../../ProfileInformationComponent/EditProfileForm';
import EditProfileImage from '../../ProfileInformationComponent/EditProfileImage';
import ProfileBasicInformation from '../../ProfileInformationComponent/ProfileBasicInformation';
import ProfileAdvancedInformation from '../../ProfileInformationComponent/ProfileAdvancedInformation';
import NavbarStudio from './NavbarStudio';

//Hooks para mostrar los modales.
import useHandleShowModal from '../../ProfileInformationComponent/hooks/useHandleShowModal';
import useHandleSection from '../../ProfileInformationComponent/hooks/useHandleSection';
import MyStudio from './MyStudio';
import MyPortfolio from './MyPortfolio';
import AddCategorys from './AddCategorys';
import AddServices from './AddServices';

const StudioComponent = ({userData}) => {
    const [profileData, setProfileData] = useState(userData.perfil); //Guarda los datos del perfil obtenidos de la api.

    //Hook para motrar los modales.
    const {handleOnClickShowModal, whichModal} = useHandleShowModal();

    //Hook para mostrar las secciones en el componente AdvanceInformation
    const { handleOnClickSection, whichSection} = useHandleSection('myStudio');

    //Modales que se muestran en la pagina cuando se requiere editar algunos datos.
    const modals = {
        editProfileForm: <EditProfileForm handleShowModal={handleOnClickShowModal} profileData={profileData} setProfileData={setProfileData}/>,
        editProfileImage: <EditProfileImage handleShowModal={handleOnClickShowModal} profileImage={profileData.imagenPerfil} setProfileData={setProfileData}/>,
        editProfileBackgroundImage: <EditProfileBackgroundImage handleShowModal={handleOnClickShowModal} setProfileData={setProfileData} backgroundImage={profileData.imagenPortada}/>,
        addCategorys: <AddCategorys handleShowModal={handleOnClickShowModal}/>,
        addServices: <AddServices handleShowModal={handleOnClickShowModal}/>,
        noModal: null
    }

    const sections = {
        myStudio: <MyStudio handleOnClickShowModal={handleOnClickShowModal}/>,
        myPortfolio: <MyPortfolio/>,
    }

    return ( 
        <Fragment>
            { modals[whichModal] }
            <ProfileBasicInformation profileData={profileData} handleOnClickShowModal={handleOnClickShowModal}/>
            <ProfileAdvancedInformation
            header={<NavbarStudio handleOnClickSection={handleOnClickSection} whichSection={whichSection}/>}>
                { sections[whichSection] }
            </ProfileAdvancedInformation>
        </Fragment>
    );
}
 
export default StudioComponent;