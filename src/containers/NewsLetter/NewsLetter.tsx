import DetailsNewsLetter from './DetailsNewsLetter';
import {
  CardNewsLetterContainer,
  NewsLetterContainer,
} from './NewsLetterStyle';
import SideImageNewsLetter from './SideImageNewsLetter';

const NewsLetter = () => {
  return (
    <NewsLetterContainer id="newsletter">
      <CardNewsLetterContainer>
        <DetailsNewsLetter />
        <SideImageNewsLetter />
      </CardNewsLetterContainer>
    </NewsLetterContainer>
  );
};

export default NewsLetter;
