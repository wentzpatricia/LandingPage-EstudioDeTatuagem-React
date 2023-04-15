import styled from 'styled-components';

export const ProfessionalsCart = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 50px 35px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  align-items: center;
  max-width: 450px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #0d0d0d;
  img {
    border-radius: 50%;
    width: 140px;
  }
  h3 {
    font-size: 25px;
    font-weight: 600;
    margin-top: 40px;
  }
  p {
    font-size: 16px;
    margin: 30px auto;
  }
`;

export const LinksSocialMedias = styled.div`
  svg {
    font-size: 25px;
    color: #0d0d0d;
    transition: 0.5s;
    align-items: center;
    :hover {
      color: #a6270a;
      transform: scale(1.3);
    }
  }
  a {
    width: 50px;
    padding: 10px;
  }
`;
