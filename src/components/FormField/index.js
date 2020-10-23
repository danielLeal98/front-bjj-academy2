import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  width: auto;
  max-width: 600px;
  margin: 10px;
  justify-content: center;
  textarea {
    height: 100px;
    padding-bottom: 15px;
  }
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: black;
  height: 50px;
  position: absolute;
  top: 0;
  left: 16px;
  display: flex;
  align-items: center;
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  transition: 0.1s ease-in-out;
  padding: 4px;
`;

const Input = styled.input`
  background: var(--greyLight);
  color: var(--black);
  display: block;
  width: 100%;
  max-width: 600px;
  height: 45px;
  font-size: 16px;
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid var(--black);
  padding: 12px 12px;
  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--white);
  }
  &:focus:not([type='color']) + span {
    transform: scale(0.6) translateY(-10px);
  }
  ${({ hasValue }) =>
    hasValue &&
    css`
      &:not([type='color']) + span {
        transform: scale(0.6) translateY(-10px);
      }
    `}
`;

function FormField({ label, type, name, value, onChange, suggestions }) {
  const fieldID = `id_${name}`;
  const isTypeTextarea = type === 'textarea';
  const tag = isTypeTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldID}>
        <Input
          as={tag}
          id={fieldID}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldID}` : undefined}
        />
        <Label.Text>{label}:</Label.Text>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldID}`}>
            {suggestions.map((suggestion) => (
              <option value={suggestion} key={`suggestionFor_${fieldID}_option${suggestion}`}>
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
