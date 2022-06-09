import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { InputComponent } from "../../components/common/InputComponent";
import { jopProfileShema as schema } from "../../components/schemas/schema";
import { validate, handlerInputChangeCreator } from "../../utils/utils";
import { ButtonComponent } from "../../components/common/ButtonComponent";
import { FormsCardContainer } from "../../layout/FormsCardContainer";

const inputConfig = [
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
    id: "business",
    placeholder: "nombre empresa",
    name: "business",
    label: "¿a que empresa perteneces?",
    autoComplete: "",
  },
  {
    titleHead: {
      show: true,
      title: "Cargo/área de preferencia que buscas contratar:",
    },
    type: "checkbox",
    id: "DevFrontEnd",
    name: "DevFrontEnd",
    label: "Desarrollador Front End",
  },
  {
    type: "checkbox",
    id: "DevFullStackBackend",
    name: "DevFullStackBackend",
    label: "Desarrollador Full Stack",
  },
  {
    type: "checkbox",
    id: "DesignerUXUI",
    name: "DesignerUXUI",
    label: "Diseñador UX/UI",
  },
  {
    type: "checkbox",
    id: "AnalystQA",
    name: "AnalystQA",
    label: "Analista QA",
  },
  {
    type: "checkbox",
    id: "DevMobile",
    name: "DevMobile",
    label: "Desarrollador Mobile",
  },
  {
    type: "checkbox",
    id: "Data",
    name: "Data",
    label: "Datos",
  },
  {
    type: "checkbox",
    id: "Other",
    name: "Other",
    label: "Otra",
  },
  {
    type: "text",
    id: "doubts",
    placeholder: "dudas...",
    name: "doubts",
    label: "¿dudas? dejalas aca",
    autoComplete: "",
  },
];

const JobProfile = () => {
  const [check, setCheck] = useState(false);

  const onSubmit = (values) => {
    if (
      formik.values.DevFrontEnd === true ||
      formik.values.DevFullStackBackend === true ||
      formik.values.DesignerUXUI === true ||
      formik.values.AnalystQA === true ||
      formik.values.DevMobile === true ||
      formik.values.Data === true ||
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
      business: "",
      DevFrontEnd: false,
      DevFullStackBackend: false,
      DesignerUXUI: false,
      AnalystQA: false,
      DevMobile: false,
      Data: false,
      Other: false,
      accepted: false,
      doubts: "",
    },
    onSubmit: onSubmit,
    validate: validate(schema),
  });
  const handleTxtChange = handlerInputChangeCreator(formik);
  useEffect(() => {
    setCheck(false);
  }, [
    formik.values.DevFrontEnd,
    formik.values.DevFullStackBackend,
    formik.values.DesignerUXUI,
    formik.values.AnalystQA,
    formik.values.DevMobile,
    formik.values.Data,
    formik.values.Other,
  ]);
  return (
    <>
      <div className="bg-primary containerWithHeader-min-height flex flex-col">
        <section className=" flex grow items-center animate__animated animate__fadeIn">
          <div className="container mb-16  mx-auto mt-4">
            <FormsCardContainer>
              <h3 className="text-4xl px-4">Buscas talento TI? </h3>
              <p className="p-4">En breve te contactaremos:</p>
              <form className="p-1" onSubmit={formik.handleSubmit}>
                <div className="p-4">
                  {inputConfig.map((item, index) => (
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
                  ))}
                  {check === true ? (
                    <span className="text-error">
                      Seleccionar al menos una casilla
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <ButtonComponent
                  style={"primary"}
                  type={"submit"}
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
