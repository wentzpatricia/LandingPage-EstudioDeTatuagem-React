import About from '../../containers/About/About';
import Billboard from '../../containers/Billboard/Billboard';
import Header from '../../containers/Header/Header';
import Hero from '../../containers/Hero/Hero';
import NewsLetter from '../../containers/NewsLetter/NewsLetter';
import OurProfessionals from '../../containers/OurProfessionals/OurProfessionals';
import { HomeContainer } from './HomeStyle';

const Home = () => (
  <HomeContainer>
    <Header />
    <Hero />
    <About />
    <Billboard />
    <OurProfessionals />
    <NewsLetter />
  </HomeContainer>
);

export default Home;
