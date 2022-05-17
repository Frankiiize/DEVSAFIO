import React from "react";

const InputComponent = ({type , id, placeholder, name, label}) => {
  return(
    <>
      <label className="label capitalize">
        <span className="label-text">
          {label}
        </span>
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs input-xs"
        name={name}
        id={id}
        />
    </>
    )
}

export { InputComponent };