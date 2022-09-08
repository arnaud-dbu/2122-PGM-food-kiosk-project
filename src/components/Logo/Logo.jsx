import React from 'react';
import img from '../../assets/images/logo.png';
import { LogoImage, LogoTitle, StyledLogo } from './Logo.style';

const Logo = ({ scale }) => {
  return (
    <StyledLogo className="logo" scale={scale}>
      <LogoImage src={img} size="30vw" />
      <LogoTitle size="5vw">Sushi &apos;n Roll</LogoTitle>
    </StyledLogo>
  );
};

export default Logo;
