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


export const getValidationResult = (condition) => condition ? 'valid' : 'invalid';

export const getInputValue = (target) => {
    if (target.type === 'checkbox') return { [target.name]: target.checked }
    if (target.type === 'radio') return { [target.name]: target.value }
    if (target.type === 'file') return { [target.name]: target.files[0] }
    return { [target.name]: target.value }
}

// CREATORS
export const handlerInputChangeCreator = (formik) => ({ target }) =>{  formik.setValues({ ...formik.values, ...getInputValue(target) })};