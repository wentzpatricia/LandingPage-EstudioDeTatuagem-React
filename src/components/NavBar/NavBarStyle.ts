import styled, { keyframes } from 'styled-components';

const moveUp = keyframes`  
0% {
  opacity: 0;
  transform: translateY(-100px);
}
100% {
  opacity: 1;
  transform: translate(0px);
}`;

export const NavbarContainer = styled.div<{ open: boolean }>`
  nav {
    animation-name: ${moveUp};
    animation-duration: 0.7s;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
  }
  ul li a {
    margin-right: 10px;
    padding: 5px;
    color: #fff;
    :hover {
      color: #8a0303;
    }
  }
  @media (max-width: 768px) {
    ul {
      flex-flow: column;
      background-color: #fff;
      position: fixed;
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      transition: ${({ open }) =>
        open ? 'transform 0.3s ease-in-out' : 'transform 0'};
    }
    ul li a {
      color: #000;
      :hover {
        color: #000;
      }
    }
    ul li {
      margin-top: 15px;
      padding: 10px;
      :hover {
        background-color: #dac8b3;
      }
    }
  }
`;

export const LogoHeader = styled.div`
  padding: 10px;
  img {
    width: 75px;
  }
`;
