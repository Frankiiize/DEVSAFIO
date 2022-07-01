import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { InputComponent } from "../../components/common/InputComponent";
import { jopProfileShema as schema } from "../../components/schemas/schema";
import { validate, handlerInputChangeCreator, getErrorsFromValidationError } from "../../utils/utils";
import { ButtonComponent } from "../../components/common/ButtonComponent";
import { FormsCardContainer } from "../../layout/FormsCardContainer";
//inputsConfig
import { stepOneInputs } from "./data/inputsConfig";

const JobProfile = () => {
  const [formSteps, setFormSteps] = useState(1);
  const [check, setCheck] = useState(false);
  const [ triggeringValidation, setTriggeringValidation ] = useState(false);

  const onSubmit = (values) => {
    if (
      formik.values.DevFrontEnd === true ||
      formik.values.DevBackend === true ||
      formik.values.DevFullStackBackend === true ||
      formik.values.DesignerUXUI === true ||
      formik.values.DesignerUI === true ||
      formik.values.AnalystQA === true ||
      formik.values.DevMobile === true ||
      formik.values.Data === true ||
      formik.values.DataScientist === true ||
      formik.values.ProductManager === true ||
      formik.values.DevOps === true ||
      formik.values.EnginerData === true ||
      formik.values.Other === true
    ) {
      console.log(values);
    } else {
      setCheck(true);
    }
  };

  const formik = useFormik({
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
    },
    onSubmit: onSubmit,
    validate: validate(schema),
    
  });
  const handleTxtChange = handlerInputChangeCreator(formik);
  useEffect(() => {
    setCheck(false);
  }, [
    formik.values.DevFrontEnd,
    formik.values.DevBackend,
    formik.values.DevFullStackBackend,
    formik.values.DesignerUXUI,
    formik.values.DesignerUI,
    formik.values.AnalystQA,
    formik.values.DevMobile,
    formik.values.Data,
    formik.values.DataScientist,
    formik.values.ProductManager,
    formik.values.DevOps,
    formik.values.EnginerData,
    formik.values.Other,
    formik.values.Other,
  ]);

  return (
    <>
      <div className="bg-primary min-h-screen flex flex-col ">
        <section className=" flex grow items-center">
          <div className="container mb-10  mx-auto mt-4">
            <FormsCardContainer>
              {
                formSteps === 1 && (
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
                      Si estás{" "}
                      <span className="font-bold">
                        {" "}
                        buscando empleo Junior o Trainee (Programación, Diseño UX/UI
                        y Data Science)
                      </span>{" "}
                      te dejamos este formulario para que seas parte de distintas
                      ofertas laborales que tenemos junto a importantes empresas en
                      latinoamerica.
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
                      >
                        Linkedin
                      </a>
                    </p>

                    <p className="pt-4 ">¡Vamos con todo!</p>
                    <h1 className="text-2xl  pt-4"> Información Personal</h1>
                  </div>
                )
              }
              <form className="p-1" onSubmit={formik.handleSubmit}>
                <div className="p-4">
                 
                  {formSteps === 1 && (
            
                    <>
                      {
                      stepOneInputs.map((item, index) => (
                        <InputComponent
                          key={`input-${index}${item.name}`}
                          label={item.label}
                          type={item.type}
                          titleHead={item.titleHead}
                          id={item.id}
                          placeholder={item.placeholder}
                          name={item.name}
                          formik={formik}
                          onChange={handleTxtChange}
                        />
                      ))
                      }
                      {check === true ? (
                        <span className="text-error">
                          Seleccionar al menos una casilla
                        </span>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </div>
                {
                    triggeringValidation && (
                      <span className="text-error">llena el formulario</span>
                    )
                  }
                <ButtonComponent
                  style={"primary"}
                  type={"button"}
                  label={"siguiente"}
                  onClick={ () => formik.validateForm().then((res) =>{
                    debugger
                    if(Object.entries(res).length > 0){
                      console.log(res)
                      setTriggeringValidation(true)
                    } else {
                      console.log(formik)
                      setTriggeringValidation(false)
                      setFormSteps(() => formSteps + 1)
                    }
                  })}
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
