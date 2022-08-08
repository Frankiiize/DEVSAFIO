import React, { useRef } from "react";
import { BsCameraFill, BsCheck2Circle } from 'react-icons/bs'
import { ButtonComponent } from "./ButtonComponent";
import { SelectComponent } from "./SelectComponent";
/* 
USO: el componente recibe props 
1)type = tipo de input
2)id =  id del input
3)placeHolder = placeholder del input si es necesario
4)name: nombre del input
5)label: label del input
6)formik: instacia de formik -> importante para captular el value y los errors en la validacion
7)onChange: funcion onChange que controla los valores del componente 
8)titleHead: si es necesario un titulo de encabezado antes del label
->>En este ejemplo podemos ver como configurar el componente para que este itere en los diferentes tipos de inputs
const inputConfig = [
  {
    type: 'text/email/password/etc..',
    id: 'id',
    placeholder: 'placeholder',
    name: 'name del input',
    label: 'label del input',
    autoComplete: 'off/on',
  },
  {
    type: 'checkbox',
    id: 'id',
    name: 'checkbox name',
    label: 'checkbox label',
  },
  {
    type: 'radio',
    id: 'radio',
    name: 'todos los radio grup deben de tener el mismo name',
    label: 'radio label',
    value: 'debes enviar el valor del radio para que este sea capturado por formik || tienes que pasarle el radioValue por props ( item.value) '
  },
]
*/

const InputComponent = ({ type, formGrup, indexPrincipal, dataset, checkValue, radioValue, id, placeholder, name, label, formik, onChange, options, titleHead = { show: false, title: undefined } },  ) => {
  const checkRadioLayout = ["flex items-center mb-2 justify-start "];
  const checkInputClass = ["order-1 m-0 checkbox checkbox-primary checkbox-sm border border-gray-300 bg-white checked:border-accent focus:outline-none transition duration-200  bg-no-repeat bg-center bg-contain  cursor-pointer mr-2"];
  const radioInputClass = ["order- 1 m-0 radio radio-primary radio-sm mr-2 border border-gray-300 bg-white checked:border-accent focus:outline-none transition duration-300  bg-no-repeat bg-center bg-contain  cursor-pointer mr-2 "];
  const inputDefaultClass = ["input input-bordered rounded w-full input-md text-base  focus:border-2 focus:border-primary focus:outline-none"];
  const inputRef = useRef(null);
  const showUiFileInput = () => {
    inputRef.current.click();
  }
  return (
    <>
      {titleHead.show ? <h1 className="pt-5 pb-2 text-2xl">{titleHead.title}</h1> : null}
      <div
        className={
          (type === "checkbox" || type === 'radio') ? checkRadioLayout : type === 'file' ? 'mb-0' : "mb-2 "
        }
      >
        {
          type === "select" ? <SelectComponent
            label={label}
            name={name}
            id={id}
            formik={formik}
            onChange={onChange}
            options={options}
            dataset={dataset}
            formGrup={formGrup}
            indexPrincipal={indexPrincipal}
          /> :
            <>  <label
              htmlFor={id}
              className={
                (type === "checkbox" || type === 'radio' || type === 'file')
                  ? 'label capitalize  px-0 order-2'
                  : "label capitalize px-0"}>
              {
                type !== 'file'
                  ? <span className="label-text text-lg">{label}</span>
                  :
                  <div className="flex items-center ">
                    {
                      typeof formik.values?.[name] === 'object'
                        ? <span className="mr-10 text-base">Archivo cargado</span>
                        : <span className="mr-10 text-base"> sube un archivo </span>
                    }
                    <ButtonComponent type={"button"} label={''} onClick={showUiFileInput} style={null}>
                      {
                        typeof formik.values?.[name] === 'object'
                          ? <BsCheck2Circle size={32} color={"#FFD24C"} />
                          : <BsCameraFill size={32} color={"#646FD4"} />
                      }

                    </ButtonComponent>
                  </div>
              }
            </label>
              <input
                type={type}
                ref={inputRef}
                placeholder={placeholder}
                className={
                  type === "checkbox"
                    ? checkInputClass
                    : type === "radio"
                      ? radioInputClass
                      : type === 'file'
                        ? 'hidden'
                        : inputDefaultClass
                }
                dataset={dataset}
                name={name}
                id={id}
                onChange={onChange}
                checked={(type === 'checkbox' || type === 'radio') && formik.values[name] ? true : false} 
                value={type === "radio" ? radioValue : type === "file" ? undefined : type === 'checkbox' ? checkValue  : formGrup ? formik.values[dataset][indexPrincipal].formValues[name] : formik.values[name]}
              />
            </>
        }


      </div>
      {
       (formGrup && formik.errors[`${dataset}[${[indexPrincipal]}].formValues.${name}`]) &&
        ( 
          <div className="mb-2">
            <span className="text-error">{formik.errors[`${dataset}[${[indexPrincipal]}].formValues.${name}`]}</span>
          </div>
        )

      }
      {
      formik.touched[name] && !!formik.errors[name] && (
        <div className="mb-2">
          <span className="text-error">{formik.errors[name]}</span>
        </div>
      )
      }
      {
        dataset === 'multipleCheck' && (
          <div className="mb-2">
            <span className="text-error">{formik.errors.multipleCheck}</span>
          </div>
        )
      }
    </>
  );
}



export { InputComponent };