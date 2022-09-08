import styled from 'styled-components';

export const Gif = styled.img`
  width: ${({ width }) => width || '55vw'};
  position: absolute;
  z-index: ${({ zIndex }) => zIndex || '99'};
  bottom: ${({ bottom }) => bottom};
  top: ${({ top }) => top};
`;
