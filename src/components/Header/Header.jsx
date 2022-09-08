import React from 'react';
import { H3 } from '../../styles/Typography.style';
import Logo from '../Logo/Logo';
import { CallHelp, Languages, StyledHeader } from './Header.style';
import { IoIosHelpCircleOutline } from 'react-icons/io';

const Header = ({ className }) => {
  return (
    <StyledHeader className={className}>
      <CallHelp>
        <H3 color="var(--brokenWhite)">Call Help</H3>
        <IoIosHelpCircleOutline />
      </CallHelp>
      <Logo scale="0.65" />
      <Languages>
        <span className="active">NL</span>
        <span className="">ENG</span>
      </Languages>
    </StyledHeader>
  );
};

export default Header;
