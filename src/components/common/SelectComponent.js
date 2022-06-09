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

const SelectComponent = ({options, onChange, formik}) => {
  return(
    <>
    <div className="mb-2">
      <label >{options.label}</label>
    </div>
    <select 
      className=" appearance-none mb-2 block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat  border border-solid border-primary rounded  transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-accent focus:outline-none px-4 py-2"
      name={options.name}
      id={options.id}
      onChange={onChange}
      >
        
        <option value={0}>Selecciona...</option>
        {
          options.options.map((option) => (
            <option 
              key={`option-${option.value}`} 
              value={option.value}
              >
                {option.text}
            </option>
          ))
        }
    </select>
    {
    formik.touched[options.name] && !!formik.errors[options.name] && 
      (
        <div className="mb-2">
          <span className="text-error">{formik.errors[options.name]}</span>
        </div>
      )
    }
    </>
  );
};

export { SelectComponent };