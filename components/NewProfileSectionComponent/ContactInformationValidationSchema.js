import * as yup from 'yup';

//Schema de validation para el formulario de informacion de contacto del perfil.
export const contactInformationValidationSchema = yup.object().shape({
    nombre: yup.string().required().trim(),
    empresa: yup.string().trim(),
    ocupacion: yup.string().required().trim(),
    ubicacion: yup.string().required().trim(),
});