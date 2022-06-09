import { yupToFormErrors } from "formik";
import * as Yup from "yup";
const ACEPTED_PHOTOS = ['image/jpg','image/jpeg','image/png'];

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
let register = basicSchema.shape({
  password: Yup.string()
    .matches(/^(?=.*[A-Za-z_0-9])(?=.*\d)[A-Za-z\d]{6,}$/g, 'La contraseña debe incluir 6 characteres y almenos un numero')
    .required("Contraseña es requerida"),
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

let login = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .max(50, 'El texto no debe superar los 50 carácteres')
    .required("Email es requerido"),
  password: Yup.string()
    .matches(/^(?=.*[A-Za-z_0-9])(?=.*\d)[A-Za-z\d]{6,}$/g, 'La contraseña debe incluir 6 characteres y almenos un numero')
    .required("Contraseña es requeridad"),
});

export const registerSchema = () => {
  return register;
}

export const jopProfileShema = () => {
  return jopSchema;
}
export const loginSchema = () => {
  return login;
}
