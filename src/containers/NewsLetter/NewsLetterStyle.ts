import styled from 'styled-components';
export const NewsLetterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardNewsLetterContainer = styled.div`
  margin: 30px;
  width: 100%;
  display: flex;
  border-radius: 26px;
  position: relative;
  border: 1px solid grey;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  @media (max-width: 669px) {
    margin: 15px;
  }
`;