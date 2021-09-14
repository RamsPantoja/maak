import styles from './styles/ProfileAddressForm.module.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileAddressValidationSchema } from "./Validators/ProfileAddressValidationSchema";

//Componentes
import LayoutModal from "../layout/LayoutModal";
import FormInputGlass from "../FormInputComponent/FormInputGlass";
import LayoutModalCard from '../layout/LayoutModalCard';


const ProfileAddressForm = ({handleShowModal, isLoadingRequest, handleOnSubmit, title, address}) => {
    //Array de inputs para ser renderizados en el formulario de agregar direccion.
    const inputs = [
        {
            label: 'Nombre y apellido de quien recibe',
            type: 'text',
            field: 'nombre',
            value: address?.nombre
        },
        {
            label: 'Calle',
            type: 'text',
            field: 'calle',
            value: address?.calle
        },
        {
            label: 'Número exterior',
            type: 'text',
            field: 'numExterior',
            value: address?.numExterior
        },
        {
            label: 'Número interior',
            type: 'text',
            field: 'numInterior',
            value: address?.numInterior
        },
        {
            label: 'Código postal',
            type: 'number',
            field: 'codigoPostal',
            value: address?.codigoPostal
        },
        {
            label: 'Municipio/Alcaldía',
            type: 'text',
            field: 'municipio',
            value: address?.municipio
        },
        {
            label: 'Colonia',
            type: 'text',
            field: 'colonia',
            value: address?.colonia
        },
        {
            label: 'Estado',
            type: 'text',
            field: 'estado',
            value: address?.estado
        },
        {
            label: 'Referencias',
            type: 'text',
            field: 'referencias',
            value: address?.referencias
        },
        {
            label: 'Teléfono de contacto',
            type: 'number',
            field: 'telefono',
            value: address?.telefono
        }
    ]

    /*useForm permite implementar un manejador de formularios para una buena optimizacion de renderizado.
    Este hook viene de la libreria react-hook-form, la cual es muy buena para la administracion de formularios.
    ref: https://react-hook-form.com */
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(profileAddressValidationSchema)
    });

    return (
        <LayoutModal>
            <LayoutModalCard
            title={title}
            handleShowModal={handleShowModal}
            handleOnSubmit={null}
            idForm={'profileAddressForm'}
            isLoadingRequest={isLoadingRequest}>
                <div className={styles.profileAddressForm_formSection}>
                    <form onSubmit={handleSubmit(handleOnSubmit)} id='profileAddressForm' className={styles.profileAddressForm_form}>
                        <div className={styles.profileAddressForm_form_inputs}>
                            { inputs.map((input, index) => {
                                return (
                                    <FormInputGlass value={input.value} error={errors?.[input.field]} field={input.field} register={register} type={input.type} key={index} label={input.label}/> 
                                )
                            })}
                        </div>
                    </form>
                </div>
            </LayoutModalCard>
        </LayoutModal>
    )
}

export default ProfileAddressForm;