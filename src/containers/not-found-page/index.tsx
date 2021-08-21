import React from 'react';
import img from 'assets/images/404.png';
import { useLocation } from 'react-router';

const NotFoundPage = (): JSX.Element => {
  const location = useLocation();

  return (
    <>
      <div className="notFound">
        <img src={img} alt="404" className="notFound__img" />
        <p className="notFound__text">
          No match for <u>{location.pathname}</u>
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
