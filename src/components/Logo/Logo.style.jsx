import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(${({ scale }) => scale || '1'});
`;

export const LogoTitle = styled.span`
  color: #eb6b09;
  font-family: ab-karuta-bold, sans-serif;
  font-size: ${({ size }) => size};
  padding-top: 1vh;
`;

export const LogoImage = styled.img`
  width: ${({ size }) => size};
`;
