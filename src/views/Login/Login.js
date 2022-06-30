import React, { useContext } from "react";
import { useFormik } from "formik";
import { ButtonComponent } from "../../components/common/ButtonComponent";
import { InputComponent } from "../../components/common/InputComponent";
import { loginSchema as schema } from "../../components/schemas/schema";
import { authContext } from "../../context/authContext";
import { FormsCardContainer } from "../../layout/FormsCardContainer";
import { login as loginService } from "../../services/users";
import { handlerInputChangeCreator, validate } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
const inputConfig = [
  {
    type: 'email',
    id: 'email',
    placeholder: 'email@gmail.com',
    name: 'email',
    label: 'email',
    autoComplete: 'email',
  },
  {
    type: 'password',
    id: 'password',
    placeholder: 'contraseña',
    name: 'password',
    label: 'contraseña',
    autoComplete: 'password',
  },
]

const Login = () => {
  const { user, handleLogin } = useContext(authContext);
  let navigate = useNavigate();
  const onSubmit = async (values) => {
    console.log(values);
    loginService({email: formik.values.email,password: formik.values.password })
      .then((res) => {
        debugger 
        handleLogin({token: res.result.access_token, logged: true, userData: res.result.user});
        navigate("../dashboard", { replace: true });
        console.log(res)
      } );
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: onSubmit,
    validate: validate(schema)
  })
  console.log(formik)

  const handleTxtChange = handlerInputChangeCreator(formik);

  return (
    <>
      <div className="bg-primary containerWithHeader-min-height flex flex-col">
        <section className=" flex mt-20 md:mt-0  md:grow md:items-center animate__animated animate__fadeIn">
          <div className="container mb-16  mx-auto mt-4">
            <FormsCardContainer>
              <h3 className="text-3xl px-4">Iniciar sesion</h3>
              <form className="p-1" onSubmit={formik.handleSubmit}>
                <div className="p-4">
                  <>
                  {
                    inputConfig.map((item, index) => (
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
                    ))
                  }
                    <ButtonComponent
                      style={"primary"} 
                      type={'submit'}
                    >
                      </ButtonComponent>
                  </>
                </div>
              </form>
            </FormsCardContainer>
          </div>
        </section>

      </div>
    </>
  )
};

export default Login
