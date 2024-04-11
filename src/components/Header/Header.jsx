import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderList, NavHeader } from './Header.styled';
import { styled } from 'styled-components';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 4px 16px;
  border-radius: 10px;
  background-color: #899599;
  font-weight: bold;
  transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #49c2ee;
    color: white;
  }

  &.active {
    background-color: #98d3ec;
    color: white;
  }
`;

export const Header = () => {
  return (
    <NavHeader>
      <HeaderList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </li>
      </HeaderList>
    </NavHeader>
  );
};
