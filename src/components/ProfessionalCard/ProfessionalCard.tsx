import profileImage from './../../../src/assets/perfil1.jpg';
import Tilt from 'react-parallax-tilt';
import { LinksSocialMedias, ProfessionalsCart } from './ProfessionalCardStyle';
import { BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs';

interface ProfessionalCardProps {
  name: string;
  description: string;
}

const ProfessionalCard = ({ name, description }: ProfessionalCardProps) => (
  <Tilt>
    <ProfessionalsCart>
      <img src={profileImage} alt="tattoo artist profile picture" />
      <h3>{name}</h3>
      <p>{description}</p>
      <LinksSocialMedias>
        <a href="">
          <BsInstagram />
        </a>
        <a href="">
          <BsTwitter />
        </a>
        <a href="">
          <BsWhatsapp />
        </a>
      </LinksSocialMedias>
    </ProfessionalsCart>
  </Tilt>
);

export default ProfessionalCard;
