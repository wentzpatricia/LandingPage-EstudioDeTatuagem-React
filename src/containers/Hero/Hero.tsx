import { useState } from 'react';
import backgroundImage from './../../assets/banner.jpg';
import {
  BannerImage,
  BannerText,
  Title,
  TitleTwo,
  TypeWriterHeader,
} from './HeroStyle';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [state] = useState({
    title: 'We are',
    titleTwo: 'dedicated to',
  });
  return (
    <>
      <BannerImage id="home">
        <img src={backgroundImage} alt="photo of a tattoo artist working" />
      </BannerImage>
      <BannerText>
        <Title>
          <h2>{state.title}</h2>
        </Title>

        <TitleTwo>
          <h2>{state.titleTwo}</h2>
        </TitleTwo>

        <TypeWriterHeader>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ['Art', 'Ilustration', 'Tattoo'],
            }}
          />
        </TypeWriterHeader>
      </BannerText>
    </>
  );
};

export default Hero;
