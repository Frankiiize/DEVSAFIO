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
let register = basicSchema.shape({
  password: Yup.string()
    .matches(/^(?=.*[A-Za-z_0-9])(?=.*\d)[A-Za-z\d]{6,}$/g, 'La contraseña debe incluir 6 characteres y almenos un numero')
    .required("Contraseña es requerida"),
  c_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'contraseñas no coinciden')
    .required('Confirma la contraseña'),
});

let jopSchema = Yup.object().shape({
  number: Yup.string()
    .required('debes de ingresar tu numero telefonico'),
  city: Yup.string()
    .required('ingresa tu ciudad'),
  country: Yup.string()
    .required('ingresa tu pais'),
  gender: Yup.string()
    .required('ingresa tu genero'),
  multipleCheck: Yup.array().min(1, 'debes seleccionar una casilla')
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

let postulate = Yup.object().shape({
  maxEducationLevel: Yup.string()
    .required("Selecciona tu nivel de educacion"),
  actualEducationSituation: Yup.string()
    .required("Selecciona tu situación educativa actual"),
  englishLevel: Yup.string()
    .required("Selecciona tu nivel de ingles"),
  otherTec: Yup.string()
});

let postulate2 = Yup.object().shape({
  cvUrl: Yup.string()
    .required("Se recomienda subir como documento público en Google Drive o similar"),
  urlLinkedin: Yup.string()
    .required("Ingresa la url de tu perfil"),
  urlPortafolio: Yup.string()
    .required("Ingresa la url de tu portafolio"),
  projectDescription: Yup.string()
    .required("Comentanos algún proyecto que hayas realizado"),
  
})


export const registerSchema = () => {
  return register;
}

export const jopProfileShema = () => {
  return jopSchema;
}
export const loginSchema = () => {
  return login;
}
export const postulateSchema = () => {
  return postulate;
}
export const postulateSchema2 = () => {
  return postulate2;
}


