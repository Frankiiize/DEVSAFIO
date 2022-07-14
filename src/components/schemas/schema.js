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
    multipleCheck: Yup.array().min(1, 'debes seleccionar una casilla'),
  workavailability: Yup.string()
    .required('ingresa tu disponibilidad'),
  visa: Yup.string()
    .required('ingresa tu tipo residencia actual'),
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
  projectDescription: Yup.string()
    .required("Comentanos algún proyecto que hayas realizado"),
  experienceUI: Yup.number()
    .required("selecciona los años de experiencia"),
  experienceDev: Yup.number()
    .required("selecciona los años de experiencia"),
  experienceData: Yup.number()
    .required("selecciona los años de experiencia"),
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


