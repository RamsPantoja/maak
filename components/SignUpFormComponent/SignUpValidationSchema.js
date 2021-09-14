import * as yup from 'yup';

//Schema de validation para el formulario de SignUp.
export const signUpValidationSchema = yup.object().shape({
    nombre: yup.string().required().matches(/^[a-zñ ,.'-]+$/i).trim(),
    apellidos: yup.string().required().matches(/^[a-zñ ,.'-]+$/i).trim(),
    correo: yup.string().required().email().trim(),
    contrasena: yup.string().required().matches(/^[a-z\dñ][a-z\d\sñ]{6,}[a-z\dñ]$/i),
    agreeTerms: yup.string().required()
});