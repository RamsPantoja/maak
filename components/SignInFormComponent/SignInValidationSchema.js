import * as yup from 'yup';

//Schema de validation para el formulario de SignIn(Iniciar sesion).
export const signInValidationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
});