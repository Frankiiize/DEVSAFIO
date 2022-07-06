export const getErrorsFromValidationError = (validationError) => {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
      return {
          ...errors,
          [error.path]: error.errors[FIRST_ERROR] ,
      };
  }, {});
};

export const validate = (getValidationSchema) => {
  return (values) => {
      const validationSchema = getValidationSchema(values);
      try {
          validationSchema.validateSync(values, { abortEarly: false });
          return {};
      } catch (error) {
          return getErrorsFromValidationError(error);
      }
  };
};

const multipleCheckValues = ( target,initialValues, dataset)=> {
  if(dataset === 'multipleCheck'){
    const objectKeys = initialValues[dataset].some((e) => {
      return e.name === target.name
    })
    if(!objectKeys) {
       initialValues[dataset].push({name: target.name, value: target.checked});
       return { [target.name]: target.checked }
    } else {
      const index =  initialValues[dataset].findIndex(e => e.name === target.name);
      initialValues[dataset].splice(index, 1)
      return { [target.name]: target.checked }
    }
  } 
}

export const getInputValue = (target, formik) => {
  const initialValues = formik.initialValues;
  const dataset = target.getAttribute('dataset');

    if (target.type === 'checkbox') {
      if(!!dataset){
        multipleCheckValues(target, initialValues, dataset );
      }
      return { [target.name]: target.checked }
    }

    if (target.type === 'radio') return { [target.name]: target.value }
    if (target.type === 'file') return { [target.name]: target.files[0] }

    if(dataset){
      if(dataset.split('-')[0] === 'generatedForm'){
        const getDatasetName = dataset.split('-');
        const objectKeys = initialValues[getDatasetName[0]].some((e) => {
          const elementKey = Object.keys(e)
          return elementKey.includes(dataset)
        })
        console.log(objectKeys)
        if(!objectKeys) {
            initialValues[getDatasetName[0]].push({[dataset] : {[target.name] : target.value}})
            return
        } else {
          const index = initialValues[getDatasetName[0]].findIndex((e) => {
            const elementKey = Object.keys(e);
            return elementKey.includes(dataset)
          })
          initialValues[getDatasetName[0]][index][dataset] ={ ...initialValues[getDatasetName[0]][index][dataset], ...{[target.name] : target.value}}
          return
        }
      } 
    }
    
    return { [target.name]: target.value }
}

// CREATORS
export const handlerInputChangeCreator = (formik) => ({ target }) => {
  {  formik.setValues({ ...formik.values, ...getInputValue(target, formik) })}
};