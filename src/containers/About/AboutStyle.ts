import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionAbout = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px auto;
  align-items: center;
  width: 97%;
  background-color: #f2f2f2;
  border-radius: 20px;
`;

export const LeftSideSection = styled(motion.div)`
  border-radius: 15px;
  border: 2px solid rgba(64, 19, 19, 0.6446953781512605);
  margin: 20px;
  div {
    border-radius: 15px;
    background-color: #f2f2f2;
    padding: 40px;
  }
  div > h2 {
    font-weight: lighter;
    color: #a6270a;
    font-size: 30px;
  }
  div > p {
    margin-top: 10px;
    text-align: justify;
    line-height: 30px;
    width: 500px;
    color: #0d0d0d;
    @media (max-width: 669px) {
      width: 350px;
    }
  }
`;
export const RightSideSection = styled(motion.div)`
  padding: 20px 0;
  img {
    width: 350px;
    border-radius: 15px;
  }
`;
