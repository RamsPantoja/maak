import * as yup from 'yup';

//Schema de validation para el formulario de Editar perfil basico.
export const editProfileValidationSchema = yup.object().shape({
    nombre: yup.string().required().trim(),
    ubicacion: yup.string().required().trim(),
    ocupacion: yup.string().required().trim(),
    empresa: yup.string().trim(),
    paginaweb: yup.string().trim(),
    facebookLink: yup.string().trim(),
    instaLink: yup.string().trim(),
    twitterLink: yup.string().trim(),
    linkedInLink: yup.string().trim(),
    descripcion: yup.string().trim()
});