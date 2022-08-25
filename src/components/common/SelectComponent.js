import React from "react";

/* USO: el componente recibe un objeto de configuracion en este se especifica el label, name, id y las
opciones que son un array de objetos que este itera: EJEMPLO
const selectOptions = {
  label: 'Seleccion una de estas opciones',
  name: 'select',
  id: 'select',
  options:
  [
    {
    value: 1,
    text: 'valor numero uno '
    },
    {
      value: 2,
      text: 'valor numero dos '
    },
    {
      value: 3,
      text: 'valor numero tres '
    },
    {
      value: 4,
      text: 'valor numero cuatro '
    },
  ]
} 
con la funcion onChange obtendremos el valor de la opcion seleccionada y esta se mostrara en el estado de
formik y la validara con el schema de Yup.
*/

const SelectComponent = ({ options,  dataset, formGrup, indexPrincipal, onChange, formik, label, name, id }) => {
  const currentValue = formik.values[name] 
  const currentFormGrupValue = formGrup ?  formik.values[dataset][indexPrincipal].formValues[name] : false;
  return (
    <>
      <div className="mb-2 text-lg">
        <label >{label}</label>
      </div>
      <select
        className=" appearance-none mb-2 block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat  border border-solid border-primary rounded  transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-accent focus:outline-none px-4 py-2"
        name={name}
        id={id}
        onChange={onChange}
        dataset={dataset}
      >

        <option value={""}>{currentValue ? currentValue : formGrup ? currentFormGrupValue:  'Selecciona...'  }</option>
        {
          options.map((option) => (
            <option
              key={`option-${option.value}`}
              value={option.value}
            >
              {option.text}
            </option>
          ))
        }
      </select>
    {/*   {
        formik.touched[name] && !!formik.errors[name] &&
        (
          <div className="mb-2">
            <span className="text-error">{formik.errors[name]}</span>
          </div>
        )
      } */}
    </>
  );
};

export { SelectComponent };