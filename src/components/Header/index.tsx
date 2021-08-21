import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <div className="container">
      <ul className="list__container">
        <li>
          <NavLink to="/" exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/people" exact>
            People
          </NavLink>
        </li>
        <li>
          <NavLink to="/not-found" exact>
            Not Found
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
