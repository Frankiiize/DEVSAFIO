import React from "react";

const InputComponent = ({type , id, placeholder, name, label, formik}) => {
  
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
        className="input input-bordered rounded w-full input-sm"
        name={name}
        id={id}
        onChange={formik.handleChange}
        value={formik.values[name]}
        />
        {
         formik.touched[name] && !!formik.errors[name] &&
          <span className="text-error">{formik.errors[name]}</span>
        }
    </>
    )
}

export { InputComponent };