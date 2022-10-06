export const stepOneInputs = [
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
    placeholder: "dirección",
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
    type: "select",
    id: "gender",
    name: "gender",
    label: "Genero",
    options: [
      {
        value: "masculino",
        text: "Masculino",
      },
      {
        value: "femenino",
        text: "Femenino",
      },
      {
        value: "otro",
        text: "Otro",
      },
      {
        value: "prefiero-no-decirlo",
        text: "Prefiero no decirlo",
      },
    ]
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
    dataset: 'multipleCheck',
    value: 1,
  },
  {
    type: "checkbox",
    id: "DevBackend",
    name: "DevBackend",
    label: "Desarrollador Backend",
    dataset: 'multipleCheck',
    value:2,
  },
  {
    type: "checkbox",
    id: "DevFullStackBackend",
    name: "DevFullStackBackend",
    label: "Desarrollador Full Stack",
    dataset: 'multipleCheck',
    value: 3
  },
  {
    type: "checkbox",
    id: "DesignerUXUI",
    name: "DesignerUXUI",
    label: "Diseñador UX/UI Research",
    dataset: 'multipleCheck',
    value: 4,
  },
  {
    type: "checkbox",
    id: "DesignerUI",
    name: "DesignerUI",
    label: "Diseñador UI",
    dataset: 'multipleCheck',
    value: 5
  },
  {
    type: "checkbox",
    id: "AnalystQA",
    name: "AnalystQA",
    label: "QA Tester",
    dataset: 'multipleCheck',
    value: 6
  },
  {
    type: "checkbox",
    id: "DevMobile",
    name: "DevMobile",
    label: "Desarrollador Mobile",
    dataset: 'multipleCheck',
    value: 7
  },
  {
    type: "checkbox",
    id: "DataAnalist",
    name: "DataAnalist",
    label: "Administrador de Base de Datos",
    dataset: 'multipleCheck',
    value: 8
  },
  {
    type: "checkbox",
    id: "DataScientist",
    name: "DataScientist",
    label: "Data Scientist o Especialista Machine Learning",
    dataset: 'multipleCheck',
    value: 9
  },
  {
    type: "checkbox",
    id: "ProductManager",
    name: "ProductManager",
    label: "Product Manager",
    dataset: 'multipleCheck',
    value: 10
  },
  {
    type: "checkbox",
    id: "DevOps",
    name: "DevOps",
    label: "DevOps o SRE",
    dataset: 'multipleCheck',
    value: 11
  },
  {
    type: "checkbox",
    id: "EnginerData",
    name: "EnginerData",
    label: "Ingeniero de Datos",
    dataset: 'multipleCheck',
    value: 12
  },
  {
    type: "checkbox",
    id: "Other",
    name: "Other",
    label: "Otra",
    dataset: 'multipleCheck',
    value: 13
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
        text: "Universidad Completa",
        value: "universidad_completa",
      },
      {
        text: "Universidad incompleta o en curso",
        value: "universidad_inconpleta",
      },
      {
        text: "Instituto Profecional o CFT completa",
        value: "instituto_profecional_CFT_completa",
      },
      {
        text: "Instituto Profecional o CFT incompleta",
        value: "institutoProfecinal_CFT_incompleta",
      },
      {
        text: "Educacion media completa",
        value: "educacion_media_completa",
      },
      {
        text: "Bootcamp completo",
        value: "bootcamp_completo",
      },
      {
        text: "Bootcamp incompleto o en curso",
        value: "bootcamp_incompleto",
      },
      {
        text: "Escolar completa",
        value: "escolar_completa",
      },
      {
        text: "Escolar incompleta",
        value: "escolar_incompleta",
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
        text: "Egresado",
        value: "egresado",
      },
      {
        text: "Titulado",
        value: "titulado",
      },
      {
        text: "Cursando",
        value: "en-curso",
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
        text: "Ninguno",
        value: "ninguno",
      },
      {
        text: "A1",
        value: "principiante-a1",
      },
      {
        text: "A2",
        value: "principiante-a2",
      },
      {
        text: "B1",
        value: "pre-intermedio-b1",
      },
      {
        text: "B2",
        value: "intermedio-b2",
      },
      {
        text: "C1",
        value: "intermedio-avanzado-c1",
      },
      {
        text: "C2",
        value: "avanzado-c2",
      },
     
    ]
  },
  {
    label: "¿Alguna otra competencia, herramienta o tecnología que conozcas?",
    id:"otherTec",
    name:"otherTec",
    type: "text"
  }
  
];

export const stepThreeInputs = [
  {
    type: "url",
    id: "cvUrl",
    name: "cvUrl",
    label: "Url CV",
    placeholder: "url cv",
    autoComplete: "off",
  },
  {
    type: "url",
    id: "urlLinkedin",
    name: "urlLinkedin",
    label: "URL LInkedIn",
    placeholder: "URL LInkedIn",
    autoComplete: "off",
  },
  {
    type: "url",
    id: "urlPortafolio",
    name: "urlPortafolio",
    label: "URL Portfolio / Sitio Web",
    placeholder: "URL Portfolio / Sitio Web",
    autoComplete: "off",
  },
  {
    type: "textarea",
    id: "projectDescription",
    name: "projectDescription",
    label: "Explícanos en detalle algún proyecto que te enorgullece ",
    placeholder: "Explícanos en detalle algún proyecto que te enorgullece ",
    autoComplete: "off",
  },
  {
    titleHead: {
      show: true,
      title: "Selecciona 4 habilidades blandas que te representen: ",
    },
    type: 'checkbox',
    id: 'responsabity',
    name: 'responsabity',
    label: 'Responsable',
  },
  {
    type: 'checkbox',
    id: 'leader',
    name: 'leader',
    label: 'Lider',
  },
  {
    type: 'checkbox',
    id: 'flexible',
    name: 'flexible',
    label: 'flexible/adaptable',
  },
  {
    type: 'checkbox',
    id: 'innovative',
    name: 'innovative',
    label: 'innovador/curioso',
  },
  {
    type: 'checkbox',
    id: 'analytical',
    name: 'analytical',
    label: 'Analitico/Pensamiento Lógico',
  },
  {
    type: 'checkbox',
    id: 'sociable',
    name: 'sociable',
    label: 'Comunicación/Sociable',
  },
  {
    type: 'checkbox',
    id: 'problemResolution',
    name: 'problemResolution',
    label: 'Resolución de problemas',
  },
  {
    type: 'checkbox',
    id: 'autodidact',
    name: 'autodidact',
    label: 'Aprendizaje Ágil/Autónomo',
  },
  {
    type: 'checkbox',
    id: 'productivity',
    name: 'productivity',
    label: 'Productividad/Iniciativa',
  },
  {
    type: 'checkbox',
    id: 'multitask',
    name: 'multitask',
    label: 'Multitask',
  },
  {
    type: 'checkbox',
    id: 'empathy',
    name: 'empathy',
    label: 'Colaborativo/Empatía',
  },
  {
    type: 'checkbox',
    id: 'negotiation',
    name: 'negotiation',
    label: 'Negociación',
  },
  {
    type: 'checkbox',
    id: 'resultsOriented',
    name: 'resultsOriented',
    label: 'Orientado a resultados',
  },
  {
    type: 'checkbox',
    id: 'resilient',
    name: 'resilient',
    label: 'Resiliente/Perseverante',
  },
]

export const stepFourInputs = [
  {
    titleHead: {
      show: true,
      title: "¿Qué disponibilidad laboral buscas?",
    },
    type: "select",
    id: "workavailability",
    name: "workavailability",
    label: "Disponibilidad",
    options: [
      {
        value: "fulltime",
        text: "Fulltime",
      },
      {
        value: "part-time",
        text: "Part-time",
      },
      {
        value: "freelancer",
        text: "Freelancer",
      },
     
    ]
  },
  {
    type: "textarea",
    id: "idealWork",
    name: "idealWork",
    label: "Déjanos una breve descripción con respecto tu trabajo ideal",
    placeholder: "escribe aqui"
  },
  {
    titleHead: {
      show: true,
      title: "¿Qué describe mejor tu situación actual?",
    },
    type: 'radio',
    id: 'actualSituation',
    name: 'actualSituation',
    label: 'Quiero trabajo desde mi ciudad actual',
    value: 'Quiero-trabajo-desde-mi-ciudad-actual'
  },
  {
    type: 'radio',
    id: 'actualSituation1',
    name: 'actualSituation',
    label: 'Estoy disponible a migrar de ciudad dentro de mi país',
    value: 'Estoy-disponible-a-migrar-de-ciudad-dentro-de-mi-país'
  },
  {
    type: 'radio',
    id: 'actualSituation2',
    name: 'actualSituation',
    label: 'Estoy disponible para migrar a otro país',
    value: 'Estoy-disponible-para-migrar-a-otro-país'
  },
  {
    type: "select",
    id: "visa",
    name: "visa",
    label: "Visa",
    options: [
      {
        value: "estados-unidos",
        text: "Estados Unidos",
      },
      {
        value: "union-europea",
        text: "Union Europea",
      },
      {
        value: "mi-país-de-residencia-actual",
        text: "Mi país de residencia actual ",
      },
      {
        value: "otros-paises",
        text: "Otros Paises",
      },
     
    ]
  },
]


export const educationInputs = [
  {
    type: "text",
    id: "institucion",
    name: "institucion",
    label: "Nombre Institucion:",
    dataset: 'generatedForm',
    institucion: '',
    isFormGroup: true
  },
  {
    label: "Tipo",
    name: "educacion",
    id: "educacion",
    type: "select",
    educacion: '',
    dataset: 'generatedForm',
    isFormGroup: true,
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
    area: '',
    dataset: 'generatedForm',
    isFormGroup: true,
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
    certificado: '',
    label: "Nombre carrera/certificado",
    dataset: 'generatedForm',
    isFormGroup: true
  },
  {
    type: "date",
    id: "anoGraduacion",
    name: "anoGraduacion",
    anoGraduacion: '',
    label: "Año de graduación",
    dataset: 'generatedForm',
    isFormGroup: true
  },
]
export const dbLibsFrameworkInputs = [
  {
    label: "Herramienta",
    id: "dbLibsFrameworks",
    name: "dbLibsFrameworks",
    type: "select",
    dataset: 'generatedFormDbLibsFrameworks',
    isFormGroup: true,
    options: [ 
      {
        value: "cassandra",
        text: "Cassandra",
      },
      {
        value: "couchbase",
        text: "CouchBase",
      },
      {
        value: "dynamoDB",
        text: "DynamoDB",
      },
      {
        value: "elasticsearch",
        text: "Elasticsearch",
      },
      {
        value: "firebase",
        text: "Firebase",
      },
      {
        value: "IBMDB2",
        text: "CIBM DB2",
      },
      {
        value: "mariaDB",
        text: "MariaDB",
      },
      {
        value: "microsoftSQLServer",
        text: "Microsoft SQL Server",
      },
      {
        value: "mongoDB",
        text: "MongoDB",
      },
      {
        value: "mySQL",
        text: "MySQL",
      },
      {
        value: "oracle",
        text: "Oracle",
      },
      {
        value: "postgreSQL",
        text: "PostgreSQL",
      },
      {
        value: "redis",
        text: "Redis",
      },
      {
        value: "SQLite",
        text: "SQLite",
      },
      {
        value: ".NET",
        text: ".NET",
      },
      {
        value: "angular.js",
        text: "Angular.js",
      },
      {
        value: "ansible",
        text: "Ansible",
      },
      {
        value: "apacheSpark",
        text: "Apache Spark",
      },
      {
        value: "ASP.NET",
        text: "ASP.NET",
      },
      {
        value: "chef",
        text: "Chef",
      },
      {
        value: "cordova",
        text: "Cordova",
      },
      {
        value: "deno",
        text: "Deno",
      },
      {
        value: "Django",
        text: "Django",
      },
      {
        value: "perl",
        text: "Perl",
      },
      {
        value: "drupal",
        text: "Drupal",
      },
      {
        value: "express",
        text: "Express",
      },
      {
        value: "fastAPI",
        text: "FastAPI",
      },
      {
        value: "flask",
        text: "Flask",
      },
      {
        value: "flow",
        text: "Flow",
      },
      {
        value: "flutter",
        text: "Flutter",
      },
      {
        value: "gatsby",
        text: "Gatsby",
      },
      {
        value: "hadoop",
        text: "Hadoop",
      },
      {
        value: "jQuery",
        text: "jQuery",
      },
      {
        value: "keras",
        text: "Keras",
      },
      {
        value: "kubernetes",
        text: "Kubernetes",
      },
      {
        value: "laravel",
        text: "Laravel",
      },
      {
        value: "numPy",
        text: "NumPy",
      },
      {
        value: "pandas",
        text: "Pandas",
      },
      {
        value: "pulumi",
        text: "Pulumi",
      },
      {
        value: "puppet",
        text: "Puppet",
      },
      {
        value: "Qt",
        text: "Qt",
      },
      {
        value: "reactNative",
        text: "React Native",
      },
      {
        value: "react.js",
        text: "React.js",
      },
      {
        value: "rubyOnRails",
        text: "Ruby on Rails",
      },
      {
        value: "spring",
        text: "Spring",
      },
      {
        value: "svelte",
        text: "Svelte",
      },
      {
        value: "symfony",
        text: "Symfony",
      },
      {
        value: "tensorFlow",
        text: "TensorFlow",
      },
      {
        value: "terraform",
        text: "Terraform",
      },
      {
        value: "torch/PyTorch",
        text: "Torch/PyTorch",
      },
      {
        value: "vue.js",
        text: "Vue.js",
      },
      {
        value: "xamarin",
        text: "Xamarin",
      },
      {
        value: "yarn",
        text: "Yarn",
      },
    ]
  },
  {
    label: "Nivel",
    id: "level",
    name: "level",
    type: "select",
    dataset: 'generatedFormDbLibsFrameworks',
    isFormGroup: true,
    options: [ 
      {
        value: 1,
        text: "1",
      },
      {
        value: 2,
        text: "2",
      },
      {
        value: 3,
        text: "3",
      },
      {
        value: 4,
        text: "4",
      },
      {
        value: 5,
        text: "5",
      },
    ]
  },
]
export const toolsInput = [
  {
    label: "Herramientas",
    id: "tools",
    name: "tools",
    type: "select",
    dataset: 'generatedFormTools',
    isFormGroup: true,
    options: [ 
      {
        value: 1,
        text: "Adobe Illustrator",
      },
      {
        value: 2,
        text: "Adobe PhotoShop",
      },
      {
        value: 3,
        text: "Adobe XD",
      },
      {
        value: 4,
        text: "AWS",
      },
      {
        value: 5,
        text: "Docker",
      },
      {
        value: 6,
        text: "Figma",
      },
      {
        value: 7,
        text: "Git",
      },
      {
        value: 8,
        text: "Google Analytics",
      },
      {
        value: 9,
        text: "Google Cloud Platform",
      },
      {
        value: 10,
        text: "Google Data Studio",
      },
      {
        value: 11,
        text: "Invision",
      },
      {
        value: 12,
        text: "inVision Studio",
      },
      {
        value: 13,
        text: "Jira",
      },
      {
        value: 14,
        text: "Kubermetes",
      },
      {
        value: 15,
        text: "Marvel",
      },
      {
        value: 16,
        text: "Microft Excel",
      },
      {
        value: 17,
        text: "Microft Azure",
      },
      {
        value: 18,
        text: "Miro",
      },
      {
        value: 19,
        text: "Power BI",
      },
      {
        value: 20,
        text: "Proto.io",
      },
      {
        value: 21,
        text: "Qlik",
      },
      {
        value: 22,
        text: "Sketch",
      },
      {
        value: 23,
        text: "SPSS",
      },
      {
        value: 24,
        text: "Tableau",
      },
      {
        value: 25,
        text: "Unity 3D",
      },
      {
        value: 26,
        text: "Unreal Engine",
      },
      {
        value: 27,
        text: "Zeplin",
      },
    ]
  },
  {
    label: "¿En qué nivel? ",
    id: "level",
    name: "level",
    type: "select",
    dataset: 'generatedFormTools',
    isFormGroup: true,
    options: [ 
      {
        value: 1,
        text: "1",
      },
      {
        value: 2,
        text: "2",
      },
      {
        value: 3,
        text: "3",
      },
      {
        value: 4,
        text: "4",
      },
      {
        value: 5,
        text: "5",
      },
    ]
  },
]

export const languageInputs = [
  {
    label: "Lenguajes",
    id: "programingLanguajes",
    name: "programingLanguajes",
    type: "select",
    dataset: 'generatedFormLanguages',
    isFormGroup: true,
    options: [ 
      {
        text: "APL",
        value: 1,
      },
      {
        text: "Assembly",
        value: 2,
      },
      {
        text: "Bash/Shell",
        value: 3,
      },
      {
        text: "C",
        value: 4,
      },
      {
        text: "C#",
        value: 5,
      },
      {
        text: "C++",
        value: 6,
      },
      {
        text: "Clojure",
        value: 7,
      },
      {
        text: "COBOL",
        value: 8,
      },
      {
        text: "Crystal",
        value: 9,
      },
      {
        text: "Dart",
        value: 10,
      },
      {
        text: "Delphi",
        value: 11,
      },
      {
        text: "Erlang",
        value: 12,
      },
      {
        text: "F#",
        value: 13,
      },
      {
        text: "Go",
        value: 14,
      },
      {
        text: "Groovy",
        value: 15,
      },
      {
        text: "Haskell",
        value: 16,
      },
      {
        text: "HTML/CSS",
        value: 17,
      },
      {
        text: "Java",
        value: 18,
      },
      {
        text: "JavaScript",
        value: 19,
      },
      {
        text: "Julia",
        value: 20,
      },
      {
        text: "Kotlin",
        value: 21,
      },
      {
        text: "LISP",
        value: 22,
      },
      {
        text: "Objetive-C",
        value: 23,
      },
      {
        text: "Perl",
        value: 24,
      },
      {
        text: "PHP",
        value: 25,
      },
      {
        text: "PoweShell",
        value: 26,
      },
      {
        text: "Python",
        value: 27,
      },
      {
        text: "R",
        value: 28,
      },
      {
        text: "Ruby",
        value: 29,
      },
      {
        text: "Rust",
        value: 30,
      },
      {
        text: "Scala",
        value: 31,
      },
      {
        text: "Swift",
        value: 32,
      },
      {
        text: "TypeScript",
        value: 33,
      },
      {
        text: "VBA",
        value: 34,
      },
    ]
  },
  {
    label: "Nivel",
    id: "level",
    name: "level",
    type: "select",
    dataset: 'generatedFormLanguages',
    isFormGroup: true,
    options: [ 
      {
        value: 1,
        text: "1",
      },
      {
        value: 2,
        text: "2",
      },
      {
        value: 3,
        text: "3",
      },
      {
        value: 4,
        text: "4",
      },
      {
        value: 5,
        text: "5",
      },
    ]
  },
]



export const desingExperienceInputs = [
  {
    titleHead: {
      show: true,
      title: "Experiencia en cargos de Diseño UX y/o Diseño UI:",
    },
    type: 'radio',
    id: 'experienceUI',
    name: 'experienceUI',
    label: 'sin experiencia',
    value: 'sin-experiencia'
  },
  {
    type: 'radio',
    id: 'experienceUI1',
    name: 'experienceUI',
    label: '0 a 1 año',
    value: '0-a-1-año'
  },
  {
    type: 'radio',
    id: 'experienceUI2',
    name: 'experienceUI',
    label: '1 a 2 años',
    value: '1-a-2-años'
  },
  {
    type: 'radio',
    id: 'experienceUI3',
    name: 'experienceUI',
    label: '2 a 4 años',
    value: '2-a-4-años'
  },
  {
    type: 'radio',
    id: 'experienceUI4',
    name: 'experienceUI',
    label: '5 + años',
    value: '5+-años'
  }
]

export const programingExperienceInputs = [
  {
    titleHead: {
      show: true,
      title: "Experiencia en cargos de programación (Back End, Front End, Full Stack) ",
    },
    type: 'radio',
    id: 'experienceDev',
    name: 'experienceDev',
    label: 'sin experiencia',
    value: 'sin-experiencia'
  },
  {
    type: 'radio',
    id: 'experienceDev2',
    name: 'experienceDev',
    label: '0 a 1 año',
    value: '0-a-1-año'
  },
  {
    type: 'radio',
    id: 'experienceDev3',
    name: 'experienceDev',
    label: '1 a 2 años',
    value: '1-a-2-años'
  },
  {
    type: 'radio',
    id: 'experienceDev4',
    name: 'experienceDev',
    label: '2 a 4 años',
    value: '2 a 4 años'
  },
  {
    type: 'radio',
    id: 'experienceDev5',
    name: 'experienceDev',
    label: '5 + años',
    value: '5+-años'
  },

]

export const machineDataScienceInputs = [
  {
    titleHead: {
      show: true,
      title: "Experiencia en cargos de Machine Learning, Ciencia de Datos, BI o Data Análisis",
    },
    type: 'radio',
    id: 'experienceData',
    name: 'experienceData',
    label: 'sin experiencia',
    value: 'sin-experiencia'
  },
  {
    type: 'radio',
    id: 'experienceData1',
    name: 'experienceData',
    label: '0 a 1 año',
    value: '0-a-1-año'
  },
  {
    type: 'radio',
    id: 'experienceData2',
    name: 'experienceData',
    label: '1 a 2 años',
    value: '1-a-2-años'
  },
  {
    type: 'radio',
    id: 'experienceData3',
    name: 'experienceData',
    label: '2 a 4 años',
    value: '2-a-4-años'
  },
  {
    type: 'radio',
    id: 'experienceData4',
    name: 'experienceData',
    label: '5 + años',
    value: '5+-años'
  }
]