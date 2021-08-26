import React, { useEffect, useState } from 'react';
import loaderWhite from 'assets/images/loading/loader-white.svg';
import loaderBlack from 'assets/images/loading/loader-black.svg';
import loaderBlue from 'assets/images/loading/loader-blue.svg';
import { string } from 'prop-types';

type LoadingProps = {
  theme: string;
  isShadow: boolean;
};

const UiLoading = ({ theme = 'white', isShadow = true }: LoadingProps): JSX.Element => {
  const [loaderIcon, setLoaderIcon] = useState<string>(loaderWhite);
  useEffect(() => {
    switch (theme) {
      case 'white':
        setLoaderIcon(loaderWhite);
        break;
      case 'black':
        setLoaderIcon(loaderBlack);
        break;
      case 'blue':
        setLoaderIcon(loaderBlue);
        break;
      default:
        setLoaderIcon(loaderWhite);
        break;
    }
  }, []);
  return (
    <>
      <img className={`loader ${isShadow && 'shadow'}`} src={loaderIcon} alt="Loader" />
    </>
  );
};

export default UiLoading;
