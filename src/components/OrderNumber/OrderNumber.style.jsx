import styled from 'styled-components';

export const OrderNumberComponent = styled.div`
  border: 1px solid var(--brokenWhite);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1vw 5vw 0;
  border-radius: 4vw;
`;

export const OrderNumberTitle = styled.span`
  font-size: 2vw;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  top: 4vw;
`;

export const OrderNumberNumber = styled.span`
  font-size: 22.5vw;
  font-weight: 200;
`;
