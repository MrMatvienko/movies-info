import { styled } from 'styled-components';

export const List = styled.ul`
  margin: auto;
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
  @media (max-width: 759px) {
    width: 160px;
  }
`;

export const OriginTitle = styled.p`
  font-family: inherit;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: white;
  @media (max-width: 759px) {
    font-size: 16px;
  }
`;
export const Image = styled.img`
  width: 200px;
  height: 290px;
  border-radius: 20px;
  @media (max-width: 759px) {
    width: 160px;
    height: 240px;
  }
`;
