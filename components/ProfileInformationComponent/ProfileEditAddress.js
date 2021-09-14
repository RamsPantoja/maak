import { useSession } from "next-auth/client";
import useHandleEditAddressRequest from "./hooks/useHandleEditAddressRequest";
import ProfileAddressForm from "./ProfileAddressForm"

const ProfileEditAddress = ({addressId, handleShowModal, setAddressData, addressData}) => {
    const [session, loading] = useSession(); //Obtiene la sesion actual del usuario.

    //Hook para realizar la peticion al backend que edita una direccion.
    const {isLoadingRequest, handleOnSubmit} = useHandleEditAddressRequest(session.user.email, handleShowModal, setAddressData, addressData, addressId);

    //Busca la direccion a editar de las direcciones y la pasa al formulario de direccion.
    const address = addressData.find((address) => address.numDireccion === addressId);
    
    return (
        <ProfileAddressForm  
        handleShowModal={handleShowModal}
        title={'EDITAR DIRECCIÓN'}
        isLoadingRequest={isLoadingRequest}
        handleOnSubmit={handleOnSubmit}
        address={address}/>
    )
}

export default ProfileEditAddress;