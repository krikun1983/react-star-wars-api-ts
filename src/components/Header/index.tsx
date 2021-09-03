import Favorite from 'components/favorite';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { THEME_DARK, THEME_LIGHT, THEME_MIDDLE, useTheme } from 'context/theme-provider';

import imgDroid from 'assets/images/header/droid.svg';
import imgSaber from 'assets/images/header/lightsaber.svg';
import imgStation from 'assets/images/header/space-station.svg';

const Header = (): JSX.Element => {
  const [icon, setIcon] = useState<string>(imgStation);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgSaber);
        break;
      case THEME_DARK:
        setIcon(imgStation);
        break;
      case THEME_MIDDLE:
        setIcon(imgDroid);
        break;

      default:
        setIcon(imgStation);
        break;
    }
  }, [isTheme]);

  return (
    <div className="container">
      <img className="header_logo" src={icon} alt="Star Wars" />
      <ul className="nav__container">
        <li>
          <NavLink to="/" exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/not-found" exact>
            Not Found
          </NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
