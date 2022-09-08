import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${({ color }) => color || 'var(--brokenWhite)'};
  font-size: ${({ size }) => size || '3.5vw'};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: 200;
`;

export const H2 = styled.h2`
  font-size: ${({ size }) => size || '2.5vw'};
  margin: ${({ margin }) => margin || '0'};
  color: ${({ color }) => color || 'var(--brokenWhite)'}; ;
`;

export const H3 = styled.h3`
  color: ${({ color }) => color || 'var(--orange)'};
  margin: ${({ margin }) => margin || '0'};
  font-size: ${({ size }) => size || '2vw'};
  font-weight: ${({ weight }) => weight || '400'};
`;

export const KarutaHeader = styled.span`
  color: var(--white);
  text-align: center;
  font-family: var(--fontSecondary);
  font-size: 8vw;
  color: var(--orange);
`;
