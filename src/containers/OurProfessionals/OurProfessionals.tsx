import ProfessionalCard from '../../components/ProfessionalCard/ProfessionalCard';
import { OurProfessionalsContainer } from './OurProfessionalsStyle';

const professionals = [
  {
    name: 'Pro 1',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Pro 2',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Pro 3',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Pro 4',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Pro 5',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    name: 'Pro 6',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const OurProfessionals = () => {
  return (
    <OurProfessionalsContainer id="portfolio">
      {professionals.map((pro) => (
        <ProfessionalCard name={pro.name} description={pro.description} />
      ))}
    </OurProfessionalsContainer>
  );
};

export default OurProfessionals;
