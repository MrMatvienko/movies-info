import { styled } from 'styled-components';
import img from '../../../assets/image/backgroundimage1.jpg';
export const HomeWraper = styled.div`
  padding: 20px 80px 20px 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(rgba(46, 47, 66, 0.1), rgba(48, 47, 80, 0.6)),
    url(${img}) 50% 0 no-repeat #000;
`;
export const Title = styled.h1`
  color: white;
  text-shadow: rgb(225, 225, 225) 1px 0px 20px;
`;
