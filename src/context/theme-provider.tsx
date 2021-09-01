import React, { useContext, useState } from 'react';
import { ChildrenProps, UseThemeProps } from './type';

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_MIDDLE = 'middle';

const ThemeContext = React.createContext<UseThemeProps>({ theme: THEME_DARK });

export const ThemeProvider = ({ children, ...props }: ChildrenProps): JSX.Element => {
  const [theme, setTheme] = useState<string>('');

  const change = (name: string): void => {
    setTheme(name);
  };
  return (
    <ThemeContext.Provider value={{ theme, change }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): UseThemeProps => useContext<UseThemeProps>(ThemeContext);
