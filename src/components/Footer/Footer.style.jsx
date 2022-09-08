import styled from 'styled-components';

export const Footer = styled.div`
  width: 120vw;
  height: ${({ height }) => height};
  background-color: var(--orange);
  transform: rotate(-3deg);
  position: absolute;
  bottom: -3vh;
`;
