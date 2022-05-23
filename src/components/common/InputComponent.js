import React from "react";

const InputComponent = ({ type, id, placeholder, name, label, formik, onChange, titleHead = { show: false, title: undefined } }) => {
  return (

    <div>
      {titleHead.show ? <h1 className="mt-8  text-lg">{titleHead.title}</h1> : null}
      <div className={type === "checkbox" ? "display: flex mt-2" : undefined}>
        <label className="label capitalize ml-5" >
          <span className="label-text" >
            {label}
          </span>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className={type === "checkbox" ? 'mt-3 absolute' : "input input-bordered rounded w-full input-sm"}
          name={name}
          id={id}
          onChange={onChange}
          value={formik.values[name]}
        />

        {/* {type === "checkbox" && <label>{label}</label>} */}
        {
          formik.touched[name] && !!formik.errors[name] &&
          <span className="text-error">{formik.errors[name]}</span>
        }
      </div>
    </div>
  )
}



export { InputComponent };