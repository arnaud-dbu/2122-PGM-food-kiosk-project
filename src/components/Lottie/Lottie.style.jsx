import styled from 'styled-components';

export const Lottie = styled.div`
  width: 5vw;
  height: 5vw;
  position: relative;
  transform: scale(${({ scale }) => scale});
  margin-bottom: ${({ mb }) => mb || '3vw'};
  bottom: ${({ bottom }) => bottom};
`;
