import { useFormik } from "formik";
import React from "react";
import { ButtonComponent } from "../../components/common/ButtonComponent";
import { InputComponent } from "../../components/common/InputComponent";
import { registerSchema as schema } from "../../components/schemas/schema";
import { FormsCardContainer } from "../../layout/FormsCardContainer";
import { handlerInputChangeCreator, validate } from "../../utils/utils";
const inputConfig = [
  {
    type: 'text',
    id: 'name',
    placeholder: 'tu nombre',
    name: 'name',
    label: 'nombre',
    autoComplete: 'given-name',
  },
  {
    type: 'text',
    id: 'lastName',
    placeholder: 'tu apellido',
    name: 'lastName',
    label: 'Apellido',
    autoComplete: 'family-name',
  },
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
  {
    type: 'password',
    id: 'c_password',
    placeholder: 'confirma la contraseña',
    name: 'c_password',
    label: 'confirma',
    autoComplete: 'off',
  },
]

const RegisterPage = () => {

  const onSubmit = (values) => {
    console.log(values);
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      c_password: '',
      select:'',
      file:'',
    },
    onSubmit: onSubmit,
    validate: validate(schema)
  })

  const handleTxtChange = handlerInputChangeCreator(formik);

  return (
    <>
      <div  className="bg-primary containerWithHeader-min-height flex flex-col">
        <section className=" flex grow items-center animate__animated animate__fadeIn">
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
        </section>

      </div>
    </>
  )
};

export default RegisterPage
