import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderList, NavHeader } from './Header.styled';

export const Header = () => {
  return (
    <NavHeader>
      <HeaderList>
        <li>
          <NavLink className="nav-link " to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link " to="/movies">
            Movies
          </NavLink>
        </li>
      </HeaderList>
    </NavHeader>
  );
};
