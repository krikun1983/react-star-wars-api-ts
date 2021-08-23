import React from 'react';
import { useHistory } from 'react-router';
import iconBack from 'assets/images/back.svg';

const PersonLinkBack = (): JSX.Element => {
  const history = useHistory();
  const handleGoBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    history.go(-1);
  };
  return (
    <button className="back_link" onClick={handleGoBack} type="button">
      <img className="back_link_img" src={iconBack} alt="Go back" />
      <span>Go back</span>
    </button>
  );
};

export default PersonLinkBack;
