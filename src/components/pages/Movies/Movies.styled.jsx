import { styled } from 'styled-components';
import img from '../../../assets/image/backgroundimage1.jpg';
export const Wraper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px 80px 20px 80px;
  justify-content: center;
  background: linear-gradient(rgba(46, 47, 66, 0.1), rgba(48, 47, 80, 0.6)),
    url(${img}) 50% 0 no-repeat #000;
`;
