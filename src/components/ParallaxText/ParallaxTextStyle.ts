import styled from 'styled-components';

export const ParallaxStyle = styled.div`
  overflow: hidden;
  letter-spacing: -2px;
  line-height: 0.8;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
`;

export const Scroller = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 64px;
  display: flex;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
  > span {
    display: block;
    margin-right: 30px;
  }
`;
