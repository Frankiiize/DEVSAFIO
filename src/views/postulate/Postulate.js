import { useFormik } from "formik";
import React, { useState } from "react";
import { InputComponent } from "../../components/common/InputComponent";
import { jopProfileShema as schema, postulateSchema, dinamicSchema } from "../../components/schemas/schema";
import { validate, handlerInputChangeCreator } from "../../utils/utils";
import { ButtonComponent } from "../../components/common/ButtonComponent";
import { FormsCardContainer } from "../../layout/FormsCardContainer";
//inputsConfig
import { stepOneInputs, stepTwoinputs, educationInputs } from "./data/inputsConfig";
import { PostulateForm1 } from "./forms/PostulateForms";

const JobProfile = () => {
  const [formSteps, setFormSteps] = useState(2);
  const [ educationFiels, setEducationFields ] = useState([educationInputs]);

  const onStepSubmit = () => {
    setFormSteps(() => formSteps + 1)
  };
  const onSubmit = (values) =>{
    console.log(values.generatedForm.map((e) => {
      return e
    }))
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
      generatedForm : [],
      actualEducationSituation: '',
      englishLevel:'',
    },
    validate: validate(postulateSchema),
    onSubmit: onSubmit
  })

  const handleTxtChange = handlerInputChangeCreator(formikStepOne);
  const handleTxtChange2 = handlerInputChangeCreator(formikStepTwo);
  console.log(formikStepTwo.values)

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
                  <h1 className="text-2xl  pt-4"> Información Personal</h1>
                </div>
              )}
              <form className="p-1" /* onSubmit={formik2.handleSubmit} */>
                <div className="p-4">
                  {
                    formSteps === 1 && (
                      <>
                        <PostulateForm1 
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
                      {
                        stepTwoinputs.slice(0,1).map((item, index) => (
                          <InputComponent
                            key={`input-${index}${item.name}`}
                            label={item.label}
                            type={item.type}
                            titleHead={item.titleHead}
                            id={item.id}
                            placeholder={item.placeholder}
                            name={item.name}
                            formik={formikStepTwo}
                            onChange={handleTxtChange2}
                            options={item.options}
                          />
                        ))
                      }
                      <span>¿Dónde estudiaste? </span>
                      {
                        educationFiels.map((item, indexPrincipal) => (
                          <div key={`Input-container-${indexPrincipal}`} className={"bg-accent rounded-md ease-in duration-300 my-2   p-2 " } >
                            { 
                              item.map((element, index) => (
                                  <InputComponent
                                    key={`input-${index}${element.name}`}
                                    label={element.label}
                                    type={element.type}
                                    titleHead={element.titleHead}
                                    id={element.id}
                                    placeholder={element.placeholder}
                                    name={element.name}
                                    formik={formikStepTwo}
                                    onChange={handleTxtChange2}
                                    options={element.options}
                                    dataset={`${element.dataset}-${indexPrincipal}`}
                                  />
                                ))
                              }
                          </div>
                        ))
                      }
                      <ButtonComponent
                        style={"primary"}
                        type={"button"}
                        label={"añadir"}
                        onClick={() =>
                          setEducationFields([
                            ...educationFiels,
                            ...[educationInputs],
                          ])
                        }
                      />
                      {stepTwoinputs.slice(1).map((item, index) => (
                        <InputComponent
                          key={`input-${index}${item.name}`}
                          label={item.label}
                          type={item.type}
                          titleHead={item.titleHead}
                          id={item.id}
                          placeholder={item.placeholder}
                          name={item.name}
                          formik={formikStepTwo}
                          onChange={handleTxtChange}
                          options={item.options}
                        />
                      ))}
                    <div>
                      <h3>Queremos conocer tus competencias y experiencia. Para cada herramienta queremos que agregues el nivel que sientes que tienes según esta nomenclatura:</h3>
                      <ul>
                        <li><strong>Nivel 1</strong>: No tengo experiencia laboral, solo nociones teóricas básicas</li>
                        <li><strong>Nivel 2 </strong>: No tengo experiencia laboral, pero he desarrollado proyectos utilizando esta tecnología/herramienta. </li>
                        <li><strong>Nivel 3 </strong>: Tengo poca experiencia laboral, menos de un año, necesito supervisión constante. </li>
                        <li><strong>Nivel 4 </strong>: Tengo experiencia laboral (+1 año) y/o autonomía completa a la hora de desarrollar proyectos. </li>
                        <li><strong>Nivel 5</strong>: Tengo mucha experiencia laboral y he liderado proyectos en esta tecnología.</li>
                      </ul>
                      <p>Si crees que estas herramientas no sirven para el cargo que estás buscando, no te preocupes, puedes dejarlo en blanco.</p>
                    </div>
                    </>
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
