import React from 'react';
import styles from './styles/ProfileMyAddressDataSection.module.css';

//Componentes
import ProfileMyDataLayout from '../ProfileAdvancedDataLayout';
import Image from 'next/image';
import ProfileAddressCard from './ProfileAddressCard';

const ProfileMyAddressDataSection = ({handleOnClickShowModal, addressData, setAddressId}) => {
    return (
        <ProfileMyDataLayout message={'Agregar y editar dirección para entregas y recolecciones'}>
            <div className={styles.profileMyAddressDataSection}>
                <div onClick={() => {handleOnClickShowModal('profileAddNewAddress')}} className={styles.profileMyAddressDataSection_addDirection}>
                    <Image src='/boton-agregar.svg' alt='boton agregar' width={40} height={40}/>
                    <span>Agregar dirección</span>
                </div>
                {   //Mapea todas las direcciones disponibles del usuario.
                    addressData.map((address, index) => {
                        return (
                            <ProfileAddressCard 
                            key={index}
                            nombre={address.nombre}
                            calle={address.calle}
                            numExterior={address.numExterior}
                            numInterior={address.numInterior}
                            codigoPostal={address.codigoPostal}
                            colonia={address.colonia}
                            estado={address.estado}
                            telefono={address.telefono}
                            municipio={address.municipio}
                            referencias={address.referencias}
                            numDireccion={address.numDireccion}
                            handleOnClickShowModal={handleOnClickShowModal}
                            setAddressId={setAddressId}
                            />
                        )
                    })
                }
            </div>
        </ProfileMyDataLayout>
    )
}

export default ProfileMyAddressDataSection;