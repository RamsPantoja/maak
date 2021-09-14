import * as yup from 'yup';

//Schema de validation para el formulario de Editar Datos de cuenta del perfil.
export const profileMyAccountDataValidationSchema = yup.object().shape({
    nombre: yup.string().required().trim(),
    apellidos: yup.string().required().trim(),
    rfc: yup.string().trim(),
    telefonoFijo: yup.string().trim(),
    telefonoCelular: yup.string().required().trim()
});