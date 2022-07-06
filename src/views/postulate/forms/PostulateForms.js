import React from 'react';
import { InputComponent } from '../../../components/common/InputComponent';

export const PostulateForm1 = ({inputs, stateFormik , onChange}) => {
  return (
    <>
      {
        inputs.map((item, index) => (
          <InputComponent
            key={`input-${index}${item.name}`}
            label={item.label}
            type={item.type}
            titleHead={item.titleHead}
            id={item.id}
            placeholder={item.placeholder}
            name={item.name}
            formik={stateFormik}
            onChange={onChange}
            dataset={item.dataset}
          />
        ))
      }
    </>
  );
};
