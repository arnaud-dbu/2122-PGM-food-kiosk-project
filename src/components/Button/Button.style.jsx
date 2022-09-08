import styled from 'styled-components';

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: var(--borderRadius-1);
  color: var(--brokenWhite);
  background-color: ${({ bg }) => bg};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  font-size: ${({ fontSize }) => fontSize};
  border: ${({ border }) => border};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  gap: ${({ gap }) => gap};
  position: ${({ position }) => position};
  z-index: ${({ zIndex }) => zIndex};

  svg {
    transform: scale(${({ svg }) => svg});
    width: ${({ SVGWidth }) => SVGWidth};
    height: ${({ SVGHeight }) => SVGHeight};
    fill: var(--brokenWhite);
  }

  * {
    pointer-events: none;
  }
`;

export const ButtonPrimary = styled(Button)`
  width: ${({ width }) => width || '25vw'};
  height: ${({ height }) => height || '7.5vh'};
  font-size: ${({ fontSize }) => fontSize || '3vw'};
  background-color: var(--blue);
`;

export const ButtonSecondary = styled(Button)`
  width: ${({ width }) => width || '25vw'};
  height: ${({ height }) => height || '3vh'};
  font-size: ${({ fontSize }) => fontSize || '3vw'};
  background-color: transparent;
  border: 0.1vw solid #ffffff8d;
`;

export const ButtonSecondarySmall = styled(ButtonSecondary)`
  width: fit-content;
  height: fit-content;
  padding: 0.5vw;
  border-radius: 0.5vw;
`;

export const OptionButton = styled.a`
  width: 10rem;
  background-color: transparent;
  border: ${({ border }) => border || '0.2vw solid var(--orange)'};
  border-radius: 2vw;
  height: 20vw;
  width: ${({ width }) => width || '20vw'};
  color: var(--brokenWhite);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    height: 9vw;
    width: 9vw;
    margin-bottom: 2vw;
    opacity: 0.95;
    fill: var(--brokenWhite);
    position: relative;
    top: ${({ top }) => top};
  }

  span {
    display: block;
    font-size: 2vw;
    font-family: semplicitapro, sans-serif;
    font-weight: 500;
  }
`;
