import * as yup from 'yup';

//Schema de validation para el formulario de Editar perfil basico.
export const profileAddressValidationSchema = yup.object().shape({
    nombre: yup.string().required().trim(),
    calle: yup.string().required().trim(),
    numExterior: yup.string().required().trim(),
    numInterior: yup.string().trim(),
    codigoPostal: yup.string().required().trim(),
    municipio: yup.string().required().trim(),
    colonia: yup.string().required().trim(),
    estado: yup.string().required().trim(),
    referencias: yup.string().trim(),
    telefono: yup.string().required().trim()
});