import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  function setValue(idx, value) {
    setValues({
      ...values,
      [idx]: value,
    });
  }

  function handleClick() {
    setValue(initialValues);
  }

  function handleChange(parms) {
    setValue(parms.target.getAttribute('name'), parms.target.value);
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
    handleClick,
  };
}

export default useForm;
