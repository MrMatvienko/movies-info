import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  gap: 40px;
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
  width: 120px;
  border-radius: 30px;
  cursor: pointer;
  &:hover,
  &:focus {
    border: none;
    background-color: rgba(226, 121, 121, 0.4);
    color: white;
  }
`;
