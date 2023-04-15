import { LogoHeader, NavbarContainer } from './NavBarStyle';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import logo from './../../../src/assets/rose.png';

interface NavBarProps {
  open: boolean;
}

const NavBar = ({ open }: NavBarProps) => {
  const handleClick = (e: React.BaseSyntheticEvent<Event>) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      top: location,
      behavior: 'smooth',
    });
  };
  return (
    <NavbarContainer open={open}>
      <nav>
        <Tilt>
          <LogoHeader>
            <img src={logo} alt="ilustration old schol rose" />
          </LogoHeader>
        </Tilt>
        <ul>
          <motion.li whileTap={{ scale: 1.1 }}>
            <a href="#home">Home</a>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <a href="#about" onClick={handleClick}>
              About
            </a>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <a href="#portfolio" onClick={handleClick}>
              Portfolio
            </a>
          </motion.li>
          <motion.li whileTap={{ scale: 1.1 }}>
            <a href="#newsletter" onClick={handleClick}>
              Newsletter
            </a>
          </motion.li>
        </ul>
      </nav>
    </NavbarContainer>
  );
};

export default NavBar;
