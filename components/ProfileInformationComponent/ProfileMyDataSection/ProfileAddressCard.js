import styles from './styles/ProfileAddressCard.module.css';

const ProfileAddressCard = (
    {
        nombre, 
        calle, 
        colonia, 
        municipio, 
        estado, 
        numExterior, 
        numInterior, 
        codigoPostal,
        referencias,
        telefono,
        numDireccion,
        handleOnClickShowModal,
        setAddressId
    }
) => {

    //Muestra el modal para editar una direccion y obtiene el id de la direccion para despues pasarlo al modal.
    const handleOnClickEdit = () => {
        handleOnClickShowModal('profileEditAddress');
        setAddressId(numDireccion); 
    }

    //Muestra el modal para eliminar una direccion y obtiene el id de la direccion para despues pasarlo al modal.
    const handleOnClickDelete = () => {
        handleOnClickShowModal('deleteAddressWarning');
        setAddressId(numDireccion);
    }

    return (
        <div className={styles.profileMyAddressDataSection_direction}>
            <p>{nombre}</p>
            <span>{`Calle: ${calle}`}</span>
            <span>{`Colonia: ${colonia}`}</span>
            <span>{`Municipio: ${municipio}`}</span>
            <span>{`Estado: ${estado}`}</span>
            <span>{`Número exterior: #${numExterior}`}</span>
            <span>{`Número interior: #${numInterior ? numInterior : 'No'}`}</span>
            <span>{`Código postal: ${codigoPostal}`}</span>
            <span>{`Referencias: ${referencias ? referencias : 'No'}`}</span>
            <span>{`Teléfono de contacto: ${telefono}`}</span>
            <div className={styles.profileMyAddressDataSection_direction_actionIcons}>
                <span onClick={handleOnClickEdit}>Editar</span>
                <span onClick={handleOnClickDelete}>Eliminar</span>
            </div>
        </div>
    )
}

export default ProfileAddressCard;