import React from "react";

const InputComponent = ({ type, id, placeholder, name, label, formik, onChange, titleHead = { show: false, title: '' } }) => {
  return (
    <div>
      {
      titleHead.show 
        ? 
          <h1>{titleHead.title}</h1> 
        : 
          null
      }
      <div className={type === "checkbox" ? "display: flex mt-2" : 'mt-4'}>
        <label className="label capitalize mb-2 px-0 " >
          <span className="label-text text-base" >
            {label}
          </span>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className={type === "checkbox" ? 'mt-3 absolute text-base' : "input input-bordered rounded w-full input-md text-base  focus:border-2 focus:border-primary focus:outline-none"}
          name={name}
          id={id}
          onChange={onChange}
          value={formik.values[name]}
        />

        {/* {type === "checkbox" && <label>{label}</label>} */}
        {
          formik.touched[name] && !!formik.errors[name] &&
          <div className="mt-2">
            <span className="text-error">{formik.errors[name]}</span>
          </div>
        }
      </div>
    </div>
  )
}



export { InputComponent };