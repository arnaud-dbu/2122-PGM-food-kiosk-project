import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
  font-weight: 500;
  align-items: center;
`;

export const CounterButton = styled.button`
  width: ${({ width }) => width || '7.5vw'};
  height: ${({ height }) => height || '6vw'};
  border-radius: ${({ borderRadius }) => borderRadius || 'var(--borderRadius-1)'};
  background-color: ${({ bg }) => bg || 'var(--orange)'};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: var(--brokenWhite);
    width: 3vw;
    height: 3vw;
    transform: ${({ svgScale }) => svgScale || 'scale(1.25)'};
  }
`;

export const CounterValue = styled.span`
  text-align: center;
  font-size: ${({ fontSize }) => fontSize || '3vw'};
  width: ${({ width }) => width || '5.5vw'};
`;
