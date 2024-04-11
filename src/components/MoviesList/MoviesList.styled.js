import { styled } from 'styled-components';

export const List = styled.ul`
  margin: auto;
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Item = styled.li`
  max-width: 200px;
  align-items: center;

  background-color: #000;
  transition: transform 0.5s ease;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
  border-radius: 20px;
`;

export const OriginTitle = styled.p`
  font-family: inherit;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export const ImgContainer = styled.div`
  border-bottom: 1px solid #3333;
`;
