import ChooseSide from 'components/home-page/choose-side';
import { useTheme } from 'context/theme-provider';
import React from 'react';

const HomePage = (): JSX.Element => {
  const isTheme = useTheme();

  return (
    <>
      <h2 className={`header__text header__${isTheme.theme}`}>HomePage</h2>
      <ChooseSide />
    </>
  );
};

export default HomePage;
