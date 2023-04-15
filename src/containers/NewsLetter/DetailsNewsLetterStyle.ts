import { motion } from 'framer-motion';
import styled from 'styled-components';
export const DetailsNewsLetterContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  max-width: 80%;
`;

export const HeaderDetails = styled.h2`
  margin: 0;
  color: #dac8b3;
  text-transform: uppercase;
  font-weight: bolder;
  width: 210px;
  height: 50px;
  font-size: 15px;
  text-align: center;
  animation: bounce-text 2s infinite cubic-bezier(0.245, 0.325, 0.67, 1.51);
  @keyframes bounce-text {
    60% {
      font-size: 35px;
    }
    100% {
      font-size: 35px;
    }
  }
  @media (max-width: 545px) {
    width: 170px;
    height: 50px;
    font-size: 10px;
    @keyframes bounce-text {
      60% {
        font-size: 25px;
      }
      100% {
        font-size: 25px;
      }
    }
  }
`;

export const SubHeaderDetails = styled.h3`
  margin: 15px 0;
  color: #f2f2f2;
  font-weight: 700;
  font-size: 24px;
  @media (max-width: 545px) {
    font-size: 20px;
    margin: 10px 0;
  }
`;

export const TextDetails = styled.p`
  color: #f2f2f2;
  font-size: 20px;
  @media (max-width: 545px) {
    font-size: 16px;
  }
`;

export const FormDetailsNewsLetter = styled.form`
  display: flex;
  position: relative;
  height: 50px;
  margin: 30px 45px 30px 15px;
`;

export const EmailInput = styled(motion.input)`
  outline: none;
  border: none;
  background-color: #f2f2f2;
  padding-left: 10px;
  border-radius: 17px;
  font-size: 20px;
  color: #0d0d0d;
  height: 50px;
  &:focus {
    border: 2px solid #a6270a;
  }
  &::placeholder {
    color: #272727;
  }
`;

export const SubscribeButton = styled.button`
  position: absolute;
  right: -80px;
  top: 0;
  height: 50px;
  border: none;
  outline: none;
  color: #dac8b3;
  background-color: #0d0d0d;
  font-size: 20px;
  font-weight: lighter;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  padding: 0 10px;
  transition: all 0.5s;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.5s;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
  }
  :hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.5s;
    border: 1px solid #dac8b3;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
    transform: scale(1.2, 1.2);
  }
  :hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
`;
