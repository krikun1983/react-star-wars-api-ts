import { THEME_DARK, THEME_LIGHT, THEME_MIDDLE, useTheme } from 'context/theme-provider';
import React from 'react';

const ChooseSide = (): JSX.Element => {
  const isTheme = useTheme();
  return (
    <>
      <div>Hello ChooseSide component</div>
      {isTheme.theme}
      <button onClick={() => (isTheme.change as (str: string) => void)(THEME_LIGHT)} type="button">
        Light
      </button>
      <button onClick={() => (isTheme.change as (str: string) => void)(THEME_DARK)} type="button">
        Dark
      </button>
      <button onClick={() => (isTheme.change as (str: string) => void)(THEME_MIDDLE)} type="button">
        Middle
      </button>
    </>
  );
};

export default ChooseSide;
