import React from 'react';
import './ui-input.scss';

type UiInputProps = {
  classes: string;
  value: string;
  handleInputChange: (value: string) => void;
  type: string;
  placeholder: string;
};

const UIInput = ({ classes, value, handleInputChange, type, placeholder }: UiInputProps): JSX.Element => (
  <>
    <input
      className={`input ${classes}`}
      value={value}
      onChange={e => handleInputChange(e.target.value)}
      type={type}
      placeholder={placeholder}
    />
  </>
);

export default UIInput;
