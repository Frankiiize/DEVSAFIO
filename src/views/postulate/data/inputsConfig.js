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
      title: "Experiencia en cargos de Diseño UX y/o Diseño UI:",
    },
    type: 'radio',
    id: 'experienceUI',
    name: 'experienceUI',
    label: 'sin experiencia',
    value: 0
  },
  {
    type: 'radio',
    id: 'experienceUI',
    name: 'experienceUI',
    label: '1 año',
    value: 1
  },
  {
    type: 'radio',
    id: 'experienceUI',
    name: 'experienceUI',
    label: '2 años',
    value: 2
  },
  {
    type: 'radio',
    id: 'experienceUI',
    name: 'experienceUI',
    label: '3 años',
    value: 3
  },
  {
    type: 'radio',
    id: 'experienceUI',
    name: 'experienceUI',
    label: '4 años',
    value: 4
  },
  {
    type: 'radio',
    id: 'experienceUI',
    name: 'experienceUI',
    label: '5 años',
    value: 5
  },
  {
    titleHead: {
      show: true,
      title: "Experiencia en cargos de programación (Back End, Front End, Full Stack) ",
    },
    type: 'radio',
    id: 'experienceDev',
    name: 'experienceDev',
    label: 'sin experiencia',
    value: 0
  },
  {
    type: 'radio',
    id: 'experienceDev',
    name: 'experienceDev',
    label: '1 año',
    value: 1
  },
  {
    type: 'radio',
    id: 'experienceDev',
    name: 'experienceDev',
    label: '2 años',
    value: 2
  },
  {
    type: 'radio',
    id: 'experienceDev',
    name: 'experienceDev',
    label: '3 años',
    value: 3
  },
  {
    type: 'radio',
    id: 'experienceDev',
    name: 'experienceDev',
    label: '4 años',
    value: 4
  },
  {
    type: 'radio',
    id: 'experienceDev',
    name: 'experienceDev',
    label: '5 años',
    value: 5
  },
  {
    titleHead: {
      show: true,
      title: "Experiencia en cargos de Machine Learning, Ciencia de Datos, BI o Data Análisis",
    },
    type: 'radio',
    id: 'experienceData',
    name: 'experienceData',
    label: 'sin experiencia',
    value: 0
  },
  {
    type: 'radio',
    id: 'experienceData',
    name: 'experienceData',
    label: '1 año',
    value: 1
  },
  {
    type: 'radio',
    id: 'experienceData',
    name: 'experienceData',
    label: '2 años',
    value: 2
  },
  {
    type: 'radio',
    id: 'experienceData',
    name: 'experienceData',
    label: '3 años',
    value: 3
  },
  {
    type: 'radio',
    id: 'experienceData',
    name: 'experienceData',
    label: '4 años',
    value: 4
  },
  {
    type: 'radio',
    id: 'experienceData',
    name: 'experienceData',
    label: '5 años',
    value: 5
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

export const dbLibsFrameworkInputs = [
  {
    label: "¿Bases de Datos, Librerías y Frameworks ?",
    id: "dbLibsFrameworks",
    name: "dbLibsFrameworks",
    type: "select",
    dataset: 'generatedFormDbLibsFrameworks',
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
    label: "¿En qué nivel? ",
    id: "level",
    name: "level",
    type: "select",
    dataset: 'generatedFormDbLibsFrameworks',
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
    options: [ 
      {
        value: "adobeIllustrator",
        text: "Adobe Illustrator",
      },
      {
        value: "adobePhotoShop",
        text: "Adobe PhotoShop",
      },
      {
        value: "adobeXD",
        text: "Adobe XD",
      },
      {
        value: "AWS",
        text: "AWS",
      },
      {
        value: "docker",
        text: "Docker",
      },
      {
        value: "figma",
        text: "Figma",
      },
      {
        value: "git",
        text: "Git",
      },
      {
        value: "googleAnalytics",
        text: "Google Analytics",
      },
      {
        value: "googleCloudPlatform",
        text: "Google Cloud Platform",
      },
      {
        value: "googleDataStudio",
        text: "Google Data Studio",
      },
      {
        value: "invision",
        text: "Invision",
      },
      {
        value: "inVisionStudio",
        text: "inVision Studio",
      },
      {
        value: "jira",
        text: "Jira",
      },
      {
        value: "kubermetes",
        text: "Kubermetes",
      },
      {
        value: "marvel",
        text: "Marvel",
      },
      {
        value: "microsoftExcel",
        text: "Microft Excel",
      },
      {
        value: "microsoftAzure",
        text: "Microft Azure",
      },
      {
        value: "miro",
        text: "Miro",
      },
      {
        value: "powerBI",
        text: "Power BI",
      },
      {
        value: "proto.io",
        text: "Proto.io",
      },
      {
        value: "qlik",
        text: "Qlik",
      },
      {
        value: "sketch",
        text: "Sketch",
      },
      {
        value: "SPSS",
        text: "SPSS",
      },
      {
        value: "tableau",
        text: "Tableau",
      },
      {
        value: "unity3D",
        text: "Unity 3D",
      },
      {
        value: "unrealEngine",
        text: "Unreal Engine",
      },
      {
        value: "zeplin",
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
    label: "¿Qué lenguajes manejas?",
    id: "programingLanguajes",
    name: "programingLanguajes",
    type: "select",
    dataset: 'generatedFormLanguages',
    options: [ 
      {
        value: "apl",
        text: "APL",
      },
      {
        value: "assembly",
        text: "Assembly",
      },
      {
        value: "bash-shell",
        text: "Bash/Shell",
      },
      {
        value: "c",
        text: "C",
      },
      {
        value: "c#",
        text: "C#",
      },
      {
        value: "c++",
        text: "C++",
      },
      {
        value: "clojure",
        text: "Clojure",
      },
      {
        value: "cobol",
        text: "COBOL",
      },
      {
        value: "crystal",
        text: "Crystal",
      },
      {
        value: "dart",
        text: "Dart",
      },
      {
        value: "delphi",
        text: "Delphi",
      },
      {
        value: "erlang",
        text: "Erlang",
      },
      {
        value: "f#",
        text: "F#",
      },
      {
        value: "go",
        text: "Go",
      },
      {
        value: "groovy",
        text: "Groovy",
      },
      {
        value: "haskell",
        text: "Haskell",
      },
      {
        value: "html-css",
        text: "HTML/CSS",
      },
      {
        value: "java",
        text: "Java",
      },
      {
        value: "javaScript",
        text: "JavaScript",
      },
      {
        value: "julia",
        text: "Julia",
      },
      {
        value: "kotlin",
        text: "Kotlin",
      },
      {
        value: "lisp",
        text: "LISP",
      },
      {
        value: "objetive-c",
        text: "Objetive-C",
      },
      {
        value: "perl",
        text: "Perl",
      },
      {
        value: "php",
        text: "PHP",
      },
      {
        value: "powerShell",
        text: "PoweShell",
      },
      {
        value: "python",
        text: "Python",
      },
      {
        value: "r",
        text: "R",
      },
      {
        value: "ruby",
        text: "Ruby",
      },
      {
        value: "rust",
        text: "Rust",
      },
      {
        value: "scala",
        text: "Scala",
      },
      {
        value: "swift",
        text: "Swift",
      },
      {
        value: "typeScript",
        text: "TypeScript",
      },
      {
        value: "vba",
        text: "VBA",
      },
    ]
  },
  {
    label: "¿En qué nivel? ",
    id: "level",
    name: "level",
    type: "select",
    dataset: 'generatedFormLanguages',
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

