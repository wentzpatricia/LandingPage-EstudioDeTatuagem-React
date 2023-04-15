import styled from 'styled-components';
export const SideImageContainer = styled.div`
  max-width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  background: rgb(13, 13, 13);
  background: linear-gradient(
    217deg,
    rgba(13, 13, 13, 1) 0%,
    rgba(218, 200, 179, 1) 100%
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
  @media (max-width: 491px) {
    max-width: 40%;
    clip-path: polygon(20% 0%, 100% 0, 100% 100%, 81% 100%);
    align-items: flex-start;
    justify-content: flex-end;
  }
`;
export const ImageStyle = styled.div`
  padding: 20px;
  @media (max-width: 491px) {
    padding: 10px;
  }
  img {
    width: 125px;
    @media (max-width: 491px) {
      width: 75px;
    }
  }
`;
