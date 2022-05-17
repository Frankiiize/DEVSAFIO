import React from "react";

const InputComponent = ({type , id, placeholder, name, label}) => {
  return(
    <>
      <label>
        {label}
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        class="input input-bordered input-primary w-full max-w-xs"
        name={name}
        id={id}
        />
    </>
    )
}

export { InputComponent };