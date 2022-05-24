import React from "react";

const InputComponent = ({ type, id, placeholder, name, label, formik, onChange, titleHead = { show: false, title: undefined } }) => {
  const checkRadioLayout = ["flex items-center mb-2 "];
  const checkRadioInput = ["text-base ml-4 order-2 "];
  const radioInput= ["accent-primary  h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-accent focus:outline-none transition duration-200  bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"];
  const inputDefault = ["input input-bordered rounded w-full input-md text-base  focus:border-2 focus:border-primary focus:outline-none"];
  return (
    <>
      {titleHead.show ? <h1>{titleHead.title}</h1> : null}
      <div
        className={
          type === "checkbox" ? checkRadioLayout : "mb-4"
        }
      >
        <label className="label capitalize  px-0 ">
          <span className="label-text text-base">{label}</span>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className={
            type === "checkbox" 
            ? checkRadioInput.concat(radioInput).join(' ')
            : inputDefault
          }
          name={name}
          id={id}
          onChange={onChange}
          value={formik.values[name]}
        />
      </div>
      {formik.touched[name] && !!formik.errors[name] && (
        <div className="mb-2">
          <span className="text-error">{formik.errors[name]}</span>
        </div>
      )}
    </>
  );
}



export { InputComponent };