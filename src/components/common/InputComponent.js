import React from "react";

const InputComponent = ({ type, id, placeholder, name, label, formik, onChange, titleHead = { show: false, title: undefined } }) => {
  const checkRadioLayout = ["flex items-center mb-2 justify-start "];
  const checkInput = ["order-1 m-0 checkbox checkbox-primary checkbox-sm border border-gray-300 bg-white checked:border-accent focus:outline-none transition duration-200  bg-no-repeat bg-center bg-contain  cursor-pointer mr-2"];
  const inputDefault = ["input input-bordered rounded w-full input-md text-base  focus:border-2 focus:border-primary focus:outline-none"];
  return (
    <>
      {titleHead.show ? <h1 className="py-5">{titleHead.title}</h1> : null}
      <div
        className={
          type === "checkbox" ? checkRadioLayout : "mb-2"
        }
      >
        <label className={type === "checkbox" ? 'label capitalize px-0 order-2' : "label capitalize px-0"}>
          <span className="label-text text-base">{label}</span>
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className={
            type === "checkbox"
              ? checkInput
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