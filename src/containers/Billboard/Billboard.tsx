import { ParallaxText } from '../../components/ParallaxText/ParallaxText';
import { BillboardContainer } from './BillboardStyle';

const Billboard = () => (
  <BillboardContainer>
    <ParallaxText baseVelocity={-3}>Get Tattoos</ParallaxText>
    <ParallaxText baseVelocity={3}>Have a new Tatto</ParallaxText>
  </BillboardContainer>
);

export default Billboard;
