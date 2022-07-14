import React, {useState, useContext} from "react";
import { useFormik } from "formik";
import { ButtonComponent } from "../../components/common/ButtonComponent";
import { InputComponent } from "../../components/common/InputComponent";
import { registerSchema as schema } from "../../components/schemas/schema";
import { FormsCardContainer } from "../../layout/FormsCardContainer";
import { handlerInputChangeCreator, validate } from "../../utils/utils";
import { inputConfig } from "./data/inputConfig";
import { register  as registerService } from "../../services/users";
import { SpinnerLoader } from "../../components/loaders/SpinnerLoader";
import { responseOnValidate } from "../../utils/alerts";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
const RegisterPage = () => {
  const [ formLoading, setFormLoading ] = useState(false); 
  const { handleLogin } = useContext(authContext)
  const navigate = useNavigate();


  const onSubmit = (values) => {
    setFormLoading(true);
    registerService({
      user: {
        email: values.email,
        name: values.name,
        lastname: values.lastName,
        password: values.password,
        password_confirmation: values.c_password,
      }
    })
    .then((res) => {
      setFormLoading(false);
      responseOnValidate(res, () => handleLogin(res.token, res.data.user))
      
      .then(() => {
        setFormLoading(false)
        navigate("../postulate", { replace: true, state: res });
      })
      .catch((err) => {
        setFormLoading(false);
        console.log(err);
      })
    })
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      c_password: '',
    },
    onSubmit: onSubmit,
    validate: validate(schema)
  })

  const handleTxtChange = handlerInputChangeCreator(formik);

  return (
    <>
      <div  className="bg-primary containerWithHeader-min-height flex flex-col">
        <section className=" flex grow items-center animate__animated animate__fadeIn">
          {
            !formLoading 
            ? (
              <div className="container mb-16  mx-auto mt-4">
                <FormsCardContainer>
                  <h3 className="text-3xl px-4">Registrate</h3>
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
              )
            : (
              <div className="mx-auto container mb-16 flex justify-center w-full  items-center ">
                <SpinnerLoader />
              </div>
              )
          }
     
        </section>

      </div>
    </>
  )
};

export default RegisterPage
