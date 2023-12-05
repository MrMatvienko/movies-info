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
  border: 1px solid #000;
  transition: transform 0.1s ease;
  & :hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const OriginTitle = styled.p`
  margin: auto;
  height: 65px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const ImgContainer = styled.div`
  border-bottom: 1px solid #3333;
`;
