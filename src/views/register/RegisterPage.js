import { useFormik } from "formik";
import React from "react";
import { ButtomComponent } from "../../components/common/ButtomComponent";
import { InputComponent } from "../../components/common/InputComponent";

import { registerSchema as schema } from "../../components/schemas/schema";
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

const onSubmit = (values) => {
  console.log(values);
}

const RegisterPage = () => {
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
  console.log(formik.values)

  return (
    <>
      <div className="bg-primary min-h-screen flex flex-col">
        <div >
          <img style={{maxWidth: '250px'}} className="w-1/4" src="https://devsafio.com/wp-content/uploads/2022/02/DEV-IMAGOTIPO-WHITE-HORIZONTAL.png" alt='logo' />
        </div>
        <section className=" flex grow items-center">
          <div className="container mb-16  mx-auto">
            <div className="w-full md:w-4/5 lg:w-2/4  rounded-t  mx-auto bg-white pt-5 md:pt-10 px-4 md:pb-0">
              <h3 className="text-3xl px-4">Registrate</h3>
            </div>
            <div className="w-full md:w-4/5 lg:w-2/4  rounded-b  mx-auto bg-white pt-0 px-4 md:pb-7 ">
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
                    <ButtomComponent 
                      type={'submit'}
                    />
                  </>
                </div>
              </form>
            </div>
          </div>
        </section>

      </div>
    </>
  )
};

export default RegisterPage
