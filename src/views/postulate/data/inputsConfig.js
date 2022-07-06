export const stepOneInputs = [
  {
    type: "text",
    id: "name",
    placeholder: "tu nombre",
    name: "name",
    label: "nombre",
    autoComplete: "given-name",
  },
  {
    type: "text",
    id: "lastName",
    placeholder: "tu apellido",
    name: "lastName",
    label: "Apellido",
    autoComplete: "family-name",
  },
  {
    type: "email",
    id: "email",
    placeholder: "email@gmail.com",
    name: "email",
    label: "email",
    autoComplete: "email",
  },
  {
    type: "tel",
    id: "number",
    placeholder: "numero telefono",
    name: "number",
    label: "numero telefono",
    autoComplete: "number",
  },
  {
    type: "text",
    id: "city",
    placeholder: "donde vives",
    name: "city",
    label: "¿donde vives?",
    autoComplete: "",
  },
  {
    type: "text",
    id: "country",
    placeholder: "pais",
    name: "country",
    label: "¿pais de residencia?",
    autoComplete: "",
  },
  {
    titleHead: {
      show: true,
      title: "Cargo al que optas:",
    },
    type: "checkbox",
    id: "DevFrontEnd",
    name: "DevFrontEnd",
    label: "Desarrollador Front End",
    dataset: 'multipleCheck'
  },
  {
    type: "checkbox",
    id: "DevBackend",
    name: "DevBackend",
    label: "Desarrollador Backend",
    dataset: 'multipleCheck'
  },
  {
    type: "checkbox",
    id: "DevFullStackBackend",
    name: "DevFullStackBackend",
    label: "Desarrollador Full Stack",
    dataset: 'multipleCheck'
  },
  {
    type: "checkbox",
    id: "DesignerUXUI",
    name: "DesignerUXUI",
    label: "Diseñador UX/UI Research",
    dataset: 'multipleCheck'
  },
  {
    type: "checkbox",
    id: "DesignerUI",
    name: "DesignerUI",
    label: "Diseñador UI",
    dataset: 'multipleCheck'
  },
  {
    type: "checkbox",
    id: "AnalystQA",
    name: "AnalystQA",
    label: "QA Tester",
    dataset: 'multipleCheck'
  },
  {
    type: "checkbox",
    id: "DevMobile",
    name: "DevMobile",
    label: "Desarrollador Mobile",
    dataset: 'multipleCheck'
  },
  {
    type: "checkbox",
    id: "DataAnalist",
    name: "DataAnalist",
    label: "Administrador de Base de Datos",
    dataset: 'multipleCheck'
  },
  {
    type: "checkbox",
    id: "DataScientist",
    name: "DataScientist",
    label: "Data Scientist o Especialista Machine Learning",
    dataset: 'multipleCheck'
  },
  {
    type: "checkbox",
    id: "ProductManager",
    name: "ProductManager",
    label: "Product Manager",
    dataset: 'multipleCheck'
  },
  {
    type: "checkbox",
    id: "DevOps",
    name: "DevOps",
    label: "DevOps o SRE",
    dataset: 'multipleCheck'
  },
  {
    type: "checkbox",
    id: "EnginerData",
    name: "EnginerData",
    label: "Ingeniero de Datos",
    dataset: 'multipleCheck'
  },
  {
    type: "checkbox",
    id: "Other",
    name: "Other",
    label: "Otra",
    dataset: 'multipleCheck'
  },
];
export const stepTwoinputs = [
  {
    label: "Máximo nivel educacional ",
    id: "maxEducationLevel",
    name: "maxEducationLevel",
    type: "select",
    options: [ 
      {
        value: "universidad_completa",
        text: "Universidad Completa",
      },
      {
        value: "universidad_inconpleta",
        text: "Universidad incompleta o en curso",
      },
      {
        value: "instituto_profecional_CFT_completa",
        text: "Instituto Profecional o CFT completa",
      },
      {
        value: "institutoProfecinal_CFT_incompleta",
        text: "Instituto Profecional o CFT incompleta",
      },
      {
        value: "educacion_media_completa",
        text: "Educacion media completa",
      },
      {
        value: "bootcamp_completo",
        text: "Bootcamp completo",
      },
      {
        value: "bootcamp_incompleto",
        text: "Bootcamp incompleto o en curso",
      },
      {
        value: "escolar_completa",
        text: "Escolar completa",
      },
      {
        value: "escolar_incompleta",
        text: "Escolar incompleta",
      },
    ]
  },
  {
    label: "¿Cuál es tu situación educacional actual (Bootcamp, diplomados, universidad, cursos u otros)? ",
    id: "actualEducationSituation",
    name: "actualEducationSituation",
    type: "select",
    options: [ 
      {
        value: "egresado",
        text: "Egresado",
      },
      {
        value: "titulado",
        text: "Titulado",
      },
      {
        value: "cursando",
        text: "En curso",
      },
     
    ]
  },
  {
    label: "Nivel de Inglés",
    id: "englishLevel",
    name: "englishLevel",
    type: "select",
    options: [ 
      {
        value: "ninguno",
        text: "Ninguno",
      },
      {
        value: "A1",
        text: "Principiante A1",
      },
      {
        value: "A2",
        text: "Principiante A2",
      },
      {
        value: "B1",
        text: "Pre-Intermedio B1",
      },
      {
        value: "B2",
        text: "Intermedio B2",
      },
      {
        value: "C1",
        text: "Intermedio avanzado C1",
      },
      {
        value: "C2",
        text: "Avanzado C2",
      },
     
    ]
  },
  
];


export const educationInputs = [
  {
    type: "text",
    id: "institucion",
    name: "institucion",
    label: "Nombre Institucion:",
    dataset: 'generatedForm'
  },
  {
    label: "Tipo",
    name: "educacion",
    id: "educacion",
    type: "select",
    dataset: 'generatedForm',
    options: [
      {
        value: "Universidad",
        text: "Universidad",
      },

      {
        value: "Instituto",
        text: "Instituto",
      },

      {
        value: "Bootcamp",
        text: "Bootcamp",
      },
      {
        value: "Postgrado",
        text: "Postgrado",
      },
    ],
  },
  {
    label: "Area",
    name: "area",
    id: "area",
    type: "select",
    dataset: 'generatedForm',
    options: [
      {
        value: "informatica/sistema/computacion",
        text: "informatica/sistema/computacion",
      },

      {
        value: "diseñoGrafico/Audiovisual",
        text: "Diseño Grafico/Audiovisual",
      },

      {
        value: "otraIngenieria",
        text: "Otra Ingeniería",
      },
      {
        value: "soporte/redes",
        text: "Soporte / Redes",
      },
      {
        value: "otraCarreraTecnica/profecional",
        text: "Otra carrera tecnica/profecional",
      },
      {
        value: "fullStack",
        text: "FullStack",
      },
      {
        value: "frontend",
        text: "Frontend",
      },
      {
        value: "disenoUx/disenoUi",
        text: "Diseño Ux/Diseño Ui",
      },
      {
        value: "dataScience/dataAnalysis",
        text: "Data Science/Data Analysis",
      },
      {
        value: "desarrolloMobile",
        text: "Desarrollo Mobile",
      },
      {
        value: "ciberseguridad",
        text: "Ciber Seguridad",
      },
      {
        value: "otra",
        text: "Otra",
      },
    ],
  },
  {
    type: "text",
    id: "certificado",
    name: "certificado",
    label: "Nombre carrera/certificado",
    dataset: 'generatedForm',
  },
  {
    type: "text",
    id: "anoGraduacion",
    name: "anoGraduacion",
    label: "Año de graduación",
    dataset: 'generatedForm',
  },
]