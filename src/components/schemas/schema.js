import { yupToFormErrors } from "formik";
import * as Yup from "yup";
let basicSchema = Yup.object().shape({
  name: Yup.string()
    .max(30, 'No puedes superar 30 caracteres')
    .required('Nombre es Requerido'),
  lastName: Yup.string()
    .max(30, 'No puedes superar 30 caracteres')
    .required('Apellido es requerido'),
  email: Yup.string()
    .email('Email inválido')
    .max(50, 'El texto no debe superar los 50 carácteres')
    .required("Email es requerido"),

});
let passwordSchema = basicSchema.shape({
  password: Yup.string()
    .matches(/([A-Za-z](?=.*[0-9])){6}\w+/g, 'La contraseña debe incluir 6 characteres y almenos un numero')
    .required("Contraseña es requeridad"),
  c_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'contraseñas no coinciden')
    .required('Confirma la contraseña'),
});

let jopSchema = basicSchema.shape({
  number: Yup.string()
    .required('debes de ingresar tu numero telefonico'),
  city: Yup.string()
    .required('ingresa tu ciudad'),
  country: Yup.string()
    .required('ingresa tu pais'),


})

export const registerSchema = () => {
  return passwordSchema;
}

export const jopProfileShema = () => {
  return jopSchema;
}