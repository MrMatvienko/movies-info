import { styled } from 'styled-components';

export const NavHeader = styled.nav`
  display: flex;
  text-align: center;
  align-items: center;
  height: 40px;
  margin: 0 auto;
  background-color: black;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 759px) {
    justify-content: center;
  }
`;

export const HeaderList = styled.ul`
  padding-left: 100px;
  display: flex;
  justify-content: center;
  gap: 20px;
  text-align: center;
  @media (max-width: 759px) {
    padding-left: unset;
  }
`;
