import * as Yup from "yup";

let registration = Yup.object().shape({
  name: Yup.string()
    .max(30,'No puedes superar 30 caracteres')
    .required('Nombre es Requerido'),
  lastName: Yup.string()
    .max(30,'No puedes superar 30 caracteres')
    .required('Apellido es requerido'),
  email: Yup.string()
    .email('Email inválido')
    .max(50, 'El texto no debe superar los 50 carácteres')
    .required("Email es requerido"),
  password: Yup.string()
    .matches(/([A-Za-z](?=.*[0-9])){6}\w+/g, 'La contraseña debe incluir 6 characteres y almenos un numero')
    .required("Contraseña es requeridad"),
  c_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'contraseñas no coinciden')
    .required('Confirma la contraseña'),
})

export const registerSchema = () => {
  return registration;
}