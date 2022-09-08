import styled from 'styled-components';

export const Container = styled.div`
  position: ${({ position }) => position || 'relative'};
  border-radius: ${({ borderRadius }) => borderRadius};
  display: ${({ display }) => display};
  flex-direction: ${({ dir }) => dir};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap};
  padding: ${({ p }) => p};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  gap: ${({ containerGap }) => containerGap};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bg }) => bg};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  opacity: ${({ opacity }) => opacity};
  z-index: ${({ zIndex }) => zIndex};
  text-align: ${({ textAlign }) => textAlign};
  transform: scale(${({ scale }) => scale});
`;

export const Flex = styled(Container)`
  display: flex;
`;

export const FlexVertical = styled(Flex)`
  flex-direction: column;
`;

export const FlexVerticalCenter = styled(FlexVertical)`
  align-items: center;
`;

export const BackgroundContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const BackgroundVerticalCenter = styled(FlexVerticalCenter)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const SVG = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
