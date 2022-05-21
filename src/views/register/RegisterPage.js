import { Formik, useFormik } from "formik";
import React from "react";
import { InputComponent } from "../../components/common/InputComponent";

import { registerSchema as schema } from "../../components/schemas/schema";
import { validate } from "../../utils/utils";
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

  return (
    <>
      <div className="bg-primary min-h-screen m-0  ">
        <div >
          <img className="w-1/4" src="https://devsafio.com/wp-content/uploads/2022/02/DEV-IMAGOTIPO-WHITE-HORIZONTAL.png" alt='logo' />
        </div>
        <div className="flex h-100">
          <div className="w-full  rounded  mx-auto bg-white p-4 ">
            <h3 className="text-xl">Registrate</h3>

            <form className="p-1" onSubmit={formik.handleSubmit}>
              <div className="mt-2 mb-4">
                {
                  inputConfig.map((item, index) => (
                    <InputComponent
                      key={`input-${index}${item.name}`}
                      label={item.label}
                      type={item.type}
                      id={item.id}
                      placeholder={item.placeholder}
                      name={item.name}
                      formik={formik}
                    />
                  ))
                }
              </div>


              <div >
                <button type="submit" className="btn btn-wide">Button</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
};

export default RegisterPage
