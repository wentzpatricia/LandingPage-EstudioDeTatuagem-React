import imgNewsLetter from './../../../src/assets/imgNewsLetter.png';
import { ImageStyle, SideImageContainer } from './SideImageNewsLetterStyle';

const SideImageNewsLetter = () => {
  return (
    <SideImageContainer>
      <ImageStyle>
        <img src={imgNewsLetter} alt="illustration of a tattooed hand" />
      </ImageStyle>
    </SideImageContainer>
  );
};

export default SideImageNewsLetter;