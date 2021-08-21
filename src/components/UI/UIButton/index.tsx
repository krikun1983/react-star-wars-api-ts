import React from 'react';
import UiButtonProps from 'types/ui-components';

const UiButton = ({ text, onClick, disabled, theme = 'dark', classes = '' }: UiButtonProps): JSX.Element => {
  return (
    <>
      <button className={`btn-navigation ${theme} ${classes}`} type="button" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </>
  );
};

export default UiButton;
