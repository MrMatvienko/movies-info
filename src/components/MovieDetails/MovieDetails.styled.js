import { styled } from 'styled-components';
import img from '../../assets/image/backgroundimage1.jpg';

export const WraperDetails = styled.div`
  padding: 20px 80px;
  min-height: 100vh;
  background: url(${img}) 50% 0 no-repeat #000;
`;

export const GoBack = styled.button`
  border-radius: 10px;
  border: none;
  width: 80px;
  height: 20px;
  color: white;
  background-color: #000;
  cursor: pointer;
`;

export const PosterContainer = styled.div`
  max-width: 1200px;
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;
export const TitleInfo = styled.h2`
  margin-left: 20px;
`;
export const List = styled.ul`
  display: flex;
  margin-left: 20px;
  gap: 20px;
`;

export const InfoBlock = styled.div`
  background: rgba(225, 225, 225, 0.4);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
