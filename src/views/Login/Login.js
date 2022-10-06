import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { ButtonComponent } from "../../components/common/ButtonComponent";
import { InputComponent } from "../../components/common/InputComponent";
import { loginSchema as schema } from "../../components/schemas/schema";
import { authContext } from "../../context/authContext";
import { FormsCardContainer } from "../../layout/FormsCardContainer";
import { login as loginService } from "../../services/users";
import { handlerInputChangeCreator, validate } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { SpinnerLoader } from "../../components/loaders/SpinnerLoader";
import { responseOnValidate } from "../../utils/alerts";
import { inputConfig } from "./data/inputConfig";

const Login = () => {
  const { handleLogin } = useContext(authContext);
  const [formLoading, setFormLoading] = useState(false);
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    setFormLoading(true);
    loginService({
      email: formik.values.email,
      password: formik.values.password,
    })
      .then((res) => {
        responseOnValidate(res, () => {
          handleLogin(res.token, res.data.user);
        })
          .then(() => {
            setFormLoading(false);
            navigate("../dashboard", { replace: true, state: res });
          })
          .catch(() => {
            setFormLoading(false);
          });
      })
      .catch(() => {
        setFormLoading(false);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: onSubmit,
    validate: validate(schema),
  });

  const handleTxtChange = handlerInputChangeCreator(formik);

  return (
    <>
      <div className="bg-primary containerWithHeader-min-height flex flex-col">
        <section className=" flex mt-20 md:mt-0 grow md:items-center animate__animated animate__fadeIn">
          {!formLoading ? (
            <div className="container mb-16   mx-auto mt-4">
              <FormsCardContainer>
                <h3 className="text-3xl px-4">Iniciar sesion</h3>
                <form className="p-1" onSubmit={formik.handleSubmit}>
                  <div className="p-4">
                    <>
                      {inputConfig.map((item, index) => (
                        <InputComponent
                          key={`input-${index}${item.name}`}
                          label={item.label}
                          type={item.type}
                          onChange={handleTxtChange}
                          id={item.id}
                          placeholder={item.placeholder}
                          name={item.name}
                          formik={formik}
                        />
                      ))}
                      <ButtonComponent
                        style={"primary"}
                        type={"submit"}
                      ></ButtonComponent>
                    </>
                  </div>
                </form>
              </FormsCardContainer>
            </div>
          ) : (
            <div className="mx-auto container mb-16 flex justify-center w-full  items-center ">
              <SpinnerLoader />
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Login;
