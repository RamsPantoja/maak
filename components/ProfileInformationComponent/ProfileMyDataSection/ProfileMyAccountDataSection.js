import React from 'react';

//Componentes
import ProfileMyDataLayout from '../ProfileAdvancedDataLayout';
import ProfileMyDataForm from '../ProfileMyDataForm';

//Renderiza la seccion de Datos de cuenta, en la pagina de perfil (/r3d/my_profile).
const ProfileMyAccountDataSection = ({accountData, setAccountData}) => {
    const {
        nombre,
        apellidos,
        rfc,
        telefonoCelular,
        telefonoFijo
    } = accountData;

    //Array para paginar los inputs en la seccion de Mis datos --> Datos de cuenta, en la pagina de perfil
    const inputs = [
        {
            label: 'Nombre',
            field: 'nombre',
            type: 'text',
            value: nombre
        },
        {
            label: 'Apellidos',
            field: 'apellidos',
            type: 'text',
            value: apellidos
        },
        {
            label: 'RFC',
            field: 'rfc',
            type: 'text',
            value: rfc
        },
        {
            label: 'Teléfono fijo',
            field: 'telefonoFijo',
            type: 'number',
            value: telefonoFijo
        },
        {
            label: 'Teléfono celular',
            field: 'telefonoCelular',
            type: 'number',
            value: telefonoCelular
        },
    ]

    return (
        <ProfileMyDataLayout message={'Agregar y editar mis datos'}>
            <ProfileMyDataForm inputs={inputs} setAccountData={setAccountData}/>
        </ProfileMyDataLayout>
    )
}

export default ProfileMyAccountDataSection;