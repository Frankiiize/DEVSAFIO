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
  ]

  return(
    <>
    <h1 className="text-white bg-yellow-500">register page</h1>
    <form>
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
     
        <button type="submit" class="btn">Button</button>
    </form>
    </>
  )
};

export default RegisterPage