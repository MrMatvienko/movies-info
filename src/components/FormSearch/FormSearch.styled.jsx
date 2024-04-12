import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const Input = styled.input`
  font-family: inherit;
  width: 500px;
  height: 40px;
  border-color: rgba(10, 10, 10, 0.2);
  border-radius: 30px;
  padding-left: 20px;
  outline: none;

  &:hover,
  &:focus {
    border-color: rgba(216, 48, 48, 0.4);
  }
`;

export const Button = styled.button`
  font-family: inherit;
  font-size: 18px;
  width: 120px;
  border-radius: 30px;
  color: rgba(225, 225, 225, 0.6);
  background-color: rgba(207, 95, 95, 0.8);
  border: none;
  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(209, 46, 46, 0.8);
    color: rgba(233, 230, 230, 0.9);
  }
`;
