import styled from 'styled-components';

export const Circle = styled.div`
  width: 80vw;
  height: 80vw;
  position: absolute;
  border-radius: 50%;
  background-color: var(--transparentGrey);
  bottom: ${({ bottom }) => bottom};
`;
