import { styled } from 'styled-components';

export const CastList = styled.ul`
  margin: 20px auto;
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const CastItem = styled.li`
  border: 1px solid;
  border-color: rgba(225, 225, 225, 0.4);
  border-radius: 10px;
  width: 210px;
  height: 260px;
  padding: 10px;
  background-color: rgba(225, 225, 225, 0.9);
`;
export const ImgCast = styled.img`
  margin: 0 auto;
`;
