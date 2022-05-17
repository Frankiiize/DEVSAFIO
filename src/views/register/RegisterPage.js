import React from "react";
import { InputComponent } from "../../components/common/InputComponent";

const RegisterPage = () => {
  const inputConfig = [
    {
      type:'email',
      id:'email',
      placeholder:'email@gmail.com',
      name:'email',
      label:'email',
      autoComplete:'email',
    },
    {
      type:'password',
      id:'password',
      placeholder:'contraseña',
      name:'password',
      label:'contraseña',
      autoComplete:'password',
    },
    {
      type:'password',
      id:'c_password',
      placeholder:'confirma la contraseña',
      name:'c_password',
      label:'confirma',
      autoComplete:'off',
    },
  ]

  return(
    <>
    <div className="md:container md:mx-auto px-4">
        <h1 className="text-primary  bg-yellow-500">register page</h1>
        <div className="w-1/2 border-red-900  ">
          <form className="border-2 rounded bborder-violet-500 p-4 my-4">
            <div className="my-4">

              {
                inputConfig.map((item,index) => (
                  <InputComponent 
                    key={`input-${index}${item.name}`}
                    label={item.label}
                    type={item.type}
                    id={item.id}
                    placeholder={item.placeholder}
                    name={item.name}
                  />
                ))
              }
            </div>
            <div>
              <button type="submit" class="btn btn-wide">Button</button>
            </div>
          </form>
        </div>

    </div>
    </>
  )
};

export default RegisterPage