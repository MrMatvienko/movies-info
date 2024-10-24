import { styled } from 'styled-components';
import img from '../../assets/image/backgroundimage1.jpg';

export const WraperDetails = styled.div`
  padding: 20px 80px;
  min-height: 100vh;
  background: url(${img}) 50% 0 no-repeat #000;
  @media (max-width: 759px) {
    padding: 20px 20px;
  }
`;

export const PosterContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  @media (max-width: 759px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
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
  background: rgba(225, 225, 225, 0.8);
  padding: 20px;
  border-radius: 10px;
`;
export const AdditionalBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(225, 225, 225, 0.8);
  padding: 20px;
  border-radius: 10px;
`;
