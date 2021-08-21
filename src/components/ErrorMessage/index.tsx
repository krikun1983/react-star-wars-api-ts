import React from 'react';

const ErrorMessage = (): JSX.Element => {
  return (
    <>
      <p className="errors">
        The dark side of the force has won.
        <br /> We cannot display data. <br />
        Come back when fix everything
      </p>
    </>
  );
};

export default ErrorMessage;
