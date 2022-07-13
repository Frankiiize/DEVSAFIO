import { useFormik } from "formik";
import React, { useState } from "react";
import { InputComponent } from "../../components/common/InputComponent";
import { jopProfileShema as schema, postulateSchema, dinamicSchema } from "../../components/schemas/schema";
import { validate, handlerInputChangeCreator, parsedAutoFormValues } from "../../utils/utils";
import { ButtonComponent } from "../../components/common/ButtonComponent";
import { FormsCardContainer } from "../../layout/FormsCardContainer";
//inputsConfig
import { stepOneInputs, stepTwoinputs, stepThreeInputs, educationInputs, languageInputs, dbLibsFrameworkInputs, toolsInput } from "./data/inputsConfig";
import { FormGrupLayout } from "./forms/FormGrupLayout";
import { AutoFormGeneratedLayout } from "./forms/AutoFormGeneratedLayout";

const JobProfile = () => {
  const [formSteps, setFormSteps] = useState(1);
  const [ educationFiels, setEducationFields ] = useState([educationInputs]);
  const [ languageFiels, setLanguageFields ] = useState([languageInputs]);
  const [ dbLibsFrameworkFields, setDbLibsFrameworkFields ] = useState([dbLibsFrameworkInputs]);
  const [ toolsFields, setToolFields ] = useState([toolsInput]);

  const onStepSubmit = () => {
    setFormSteps(() => formSteps + 1)
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  };

  const onSubmit = (values) =>{
    const generatedFormParse = parsedAutoFormValues(formikStepTwo.values)
    console.log(generatedFormParse)
    console.log(formikStepOne.values)
    console.log(formikStepTwo.values)
    console.log(formikStepThree.values)
  }
  const formikStepOne = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      number: "",
      city: "",
      country: "",
      DevFrontEnd: false,
      DevBackend: false,
      DevFullStackBackend: false,
      DesignerUXUI: false,
      DesignerUI: false,
      AnalystQA: false,
      DevMobile: false,
      DataAnalist: false,
      DataScientist: false,
      ProductManager: false,
      DevOps: false,
      EnginerData: false,
      Other: false,
      multipleCheck: []
    },
    onSubmit: onStepSubmit,
    validate: validate(schema),
  });

  const formikStepTwo = useFormik({
    initialValues: {
      maxEducationLevel: "",
      actualEducationSituation: '',
      englishLevel:'',
      otherTec:'',
      generatedForm : [],
      generatedFormLanguages:[],
      generatedFormDbLibsFrameworks: [],
      generatedFormTools: []
    },
    validate: validate(postulateSchema),
    onSubmit: onStepSubmit
  });
  const formikStepThree = useFormik({
    initialValues: {
      cvUrl: "",
      urlLinkedin : "",
      urlPortafolio:"",
      projectDescription: "",
      experience:"",
      responsabity:false,
      leader:false,
      flexible: false,
      innovative:false,
      analytical:false,
      sociable:false,
      problemResolution:false,
      productivity:false,
      multitask:false,
      empathy:false,
      negotiation:false,
      resultsOriented:false,
      resilient:false,

    },
    // validate: validate(postulateSchema),
    onSubmit: onSubmit
  });
  const handleTxtChange = handlerInputChangeCreator(formikStepOne);
  const handleTxtChange2 = handlerInputChangeCreator(formikStepTwo);
  const handleTxtChange3 = handlerInputChangeCreator(formikStepThree);
  return (
    <>
      <div className="bg-primary min-h-screen flex flex-col ">
        <section className=" flex grow items-center">
          <div className="container mb-10  mx-auto mt-4">
            <FormsCardContainer>
              {formSteps === 1 && (
                <div className="px-5">
                  <h1 className="text-3xl ">Únete a Devsafío</h1>
                  <h4 className="text-m  pb-5"> Formulario de Inscripción</h4>

                  <p className="mt-5">
                    Devsafio es una iniciativa que une talento junior
                    lationamericano(trainee y bootcamp) junto a mentores para
                    potenciar su empleabilidad inicial e impactar la industria
                    tecnológica.
                  </p>
                  <p className="mt-2 ">
                    Si estás
                    <span className="font-bold">
                      {" "}
                      buscando empleo Junior o Trainee (Programación, Diseño
                      UX/UI y Data Science)
                    </span>{" "}
                    te dejamos este formulario para que seas parte de distintas
                    ofertas laborales que tenemos junto a importantes empresas
                    en latinoamerica.
                  </p>
                  <p className="mt-2 ">
                    Recuerda que todos los{" "}
                    <span className="font-bold">
                      {" "}
                      talentos juniors contratados son apoyados y guiados por un
                      mentor senior durante 3 meses{" "}
                    </span>
                    (ofertas remuneradas).
                  </p>
                  <p className="mt-2 ">
                    {" "}
                    Nos puedes seguir en:{" "}
                    <a
                      className="text-blue-600"
                      href={"https://www.linkedin.com/company/devsafio"}
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>

                  <p className="pt-4 ">¡Vamos con todo!</p>
                </div>
              )}
              <div className="steps-horizontal w-full mt-10">
                <ul className="steps">
                  <li className={formSteps === 1 ? 'step step-accent after:text-white' : 'step step-primary' }data-content={formSteps === 2 ? '✓' : 1}></li>
                  <li className={formSteps === 2 ? 'step step-accent' : 'step step-primary' }data-content={formSteps === 3 ? '✓' : 2}></li>
                  <li className={formSteps === 3 ? 'step step-accent text-white' : 'step step-primary' } data-content="3"></li>
                </ul>
              </div>
              <form className="p-1" /* onSubmit={formik2.handleSubmit} */>
                <div className="p-4">
                  {
                    formSteps === 1 && (
                      <>
                      <h1 className="text-2xl  pt-4"> Información Personal</h1>
                        <FormGrupLayout 
                          inputs={stepOneInputs}
                          stateFormik={formikStepOne}
                          onChange={handleTxtChange}
                        />
                      </>
                    )
                  }
                  {
                  formSteps === 2 && (
                    <>
                    <FormGrupLayout 
                      inputs={stepTwoinputs}
                      stateFormik={formikStepTwo}
                      onChange={handleTxtChange2}
                      slice={{start: 0 , end: 1}}
                    />
                    <p className="text-xl my-5">¿Dónde estudiaste? </p>
                    {
                      educationFiels.map((item, indexPrincipal) => (
                        <div key={`Input-container-${indexPrincipal}`} className={" w-full drop-shadow-md rounded-md p-5 bg-slate-100 mb-5" } >
                          <AutoFormGeneratedLayout 
                            inputs={item}
                            stateFormik={formikStepTwo}
                            onChange={handleTxtChange2}
                            indexPrincipal={indexPrincipal}
                          />
                        </div>
                      ))
                    }
                    <ButtonComponent
                      style={"primary-small"}
                      type={"button"}
                      label={"añadir"}
                      onClick={() =>
                        setEducationFields([
                          ...educationFiels,
                          ...[educationInputs],
                        ])
                      }
                    />
                    <div className="mt-5">
                      <FormGrupLayout 
                        inputs={stepTwoinputs}
                        stateFormik={formikStepTwo}
                        onChange={handleTxtChange2}
                        slice={{start: 1, end: 3}}
                      />
                    </div>
                    <div className="text-justify">
                      <h3 className="text-xl mt-5 mb-2">Queremos conocer tus competencias y experiencia. Para cada herramienta queremos que agregues el nivel que sientes que tienes según esta nomenclatura:</h3>
                      <ul>
                        <li><strong>Nivel 1</strong>: No tengo experiencia laboral, solo nociones teóricas básicas</li>
                        <li><strong>Nivel 2 </strong>: No tengo experiencia laboral, pero he desarrollado proyectos utilizando esta tecnología/herramienta. </li>
                        <li><strong>Nivel 3 </strong>: Tengo poca experiencia laboral, menos de un año, necesito supervisión constante. </li>
                        <li><strong>Nivel 4 </strong>: Tengo experiencia laboral (+1 año) y/o autonomía completa a la hora de desarrollar proyectos. </li>
                        <li><strong>Nivel 5</strong>: Tengo mucha experiencia laboral y he liderado proyectos en esta tecnología.</li>
                      </ul>
                      <p className="pt-3">Si crees que estas herramientas no sirven para el cargo que estás buscando, no te preocupes, puedes dejarlo en blanco.</p>
                    </div>
                    {
                      languageFiels.map((item, indexPrincipal) => (
                        <div key={`Input-container-${indexPrincipal}`} className={" w-full drop-shadow-sm rounded-md p-5 bg-slate-100 my-5"} >
                          <AutoFormGeneratedLayout 
                            inputs={item}
                            stateFormik={formikStepTwo}
                            onChange={handleTxtChange2}
                            indexPrincipal={indexPrincipal}
                          />
                        </div>
                      ))
                    }
                      <ButtonComponent
                      style={"primary-small"}
                      type={"button"}
                      label={"añadir"}
                      onClick={() =>
                        setLanguageFields([
                          ...languageFiels,
                          ...[languageInputs],
                        ])
                      }
                    />
                    {
                      dbLibsFrameworkFields.map((item, indexPrincipal) => (
                        <div key={`Input-container-${indexPrincipal}`} className={"w-full drop-shadow-sm rounded-md p-5 bg-slate-100 my-5" } >
                          <AutoFormGeneratedLayout 
                            inputs={item}
                            stateFormik={formikStepTwo}
                            onChange={handleTxtChange2}
                            indexPrincipal={indexPrincipal}
                          />
                        </div>
                      ))
                    }
                      <ButtonComponent
                       style={"primary-small"}
                      type={"button"}
                      label={"añadir"}
                      onClick={() =>
                        setDbLibsFrameworkFields([
                          ...dbLibsFrameworkFields,
                          ...[dbLibsFrameworkInputs],
                        ])
                      }
                    />
                    {
                      toolsFields.map((item, indexPrincipal) => (
                        <div key={`Input-container-${indexPrincipal}`} className={"w-full drop-shadow-sm rounded-md p-5 bg-slate-100 my-5" } >
                          <AutoFormGeneratedLayout 
                            inputs={item}
                            stateFormik={formikStepTwo}
                            onChange={handleTxtChange2}
                            indexPrincipal={indexPrincipal}
                          />
                        </div>
                      ))
                    }
                      <ButtonComponent
                       style={"primary-small"}
                      type={"button"}
                      label={"añadir"}
                      onClick={() =>
                        setToolFields([
                          ...toolsFields,
                          ...[toolsInput],
                        ])
                      }
                    />
                    <FormGrupLayout 
                      inputs={stepTwoinputs}
                      stateFormik={formikStepTwo}
                      onChange={handleTxtChange2}
                      slice={{start: 3}}
                    />
                    </>
                  )
                  }
                  {
                    formSteps === 3 && (
                      <FormGrupLayout 
                        inputs={stepThreeInputs}
                        stateFormik={formikStepThree}
                        onChange={handleTxtChange3}
                      />
                    )
                  }
                </div>
                <ButtonComponent
                  style={"primary"}
                  type={"button"}
                  label={"siguiente"}
                  onClick={() => {
                    if (formSteps === 1) {
                      formikStepOne.handleSubmit();
                    } else if (formSteps === 2) {
                      formikStepTwo.handleSubmit();
                    } else {
                      formikStepThree.handleSubmit();
                    }
                  }}
                ></ButtonComponent>
              </form>
            </FormsCardContainer>
          </div>
        </section>
      </div>
    </>
  );
};

export default JobProfile;
