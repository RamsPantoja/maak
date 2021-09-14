//Componentes
import useHandleAddNewAddressRequest from './hooks/useHandleAddNewAddressRequest';
import { useSession } from 'next-auth/client';
import ProfileAddressForm from './ProfileAddressForm';

/*Renderiza un modal para agregar una nueva direccion, en Mis datos ---> Direcciones, en la pagina de /r3d/my_profile.
Recibe como props la funcion handleShowModal, para cerrar el Modal*/
const ProfileAddNewAddress = ({handleShowModal, setAddressData, addressData}) => {
    const [session, loading] = useSession(); //Obtiene la sesion del usuario.

    //Hook manejador para realizar la peticion al backend y agregar una nueva direccion.
    const { isLoadingRequest, handleOnSubmit} = useHandleAddNewAddressRequest(session.user.email, handleShowModal, setAddressData, addressData);

    return (
        <ProfileAddressForm 
        handleShowModal={handleShowModal}
        isLoadingRequest={isLoadingRequest}
        handleOnSubmit={handleOnSubmit}
        title={'AGREGAR DIRECCIÓN'}/>
    )
}

export default ProfileAddNewAddress;