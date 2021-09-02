import ChooseSide from 'components/home-page/choose-side';
import { useTheme } from 'context/theme-provider';
import React from 'react';

const HomePage = (): JSX.Element => {
  const isTheme = useTheme();

  return (
    <>
      <div className={`header__text header__${isTheme.theme}`}>HomePage</div>
      <ChooseSide />
    </>
  );
};

export default HomePage;
