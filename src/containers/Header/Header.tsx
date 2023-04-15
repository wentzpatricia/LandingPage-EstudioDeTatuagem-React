import { useEffect, useState } from 'react';
import BurguerButton from '../../components/BurguerButton/BurguerButton';
import NavBar from '../../components/NavBar/NavBar';
import * as S from './HeaderStyle';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isSolidColor, setIsSolidColor] = useState(true);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setIsSolidColor(false);
    } else {
      setIsSolidColor(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, [changeColor]);

  return (
    <S.HeaderContainer isSolidColor={isSolidColor}>
      <NavBar open={open} />
      <BurguerButton open={open} onOpen={setOpen} />
    </S.HeaderContainer>
  );
};

export default Header;
