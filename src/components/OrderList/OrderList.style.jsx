import styled from 'styled-components';

export const OrderListContainer = styled.div`
  width: 40vw;
  padding: 0 3.5vw 5vh;
  display: flex;
  flex-direction: column;
  position: relative;

  ::before {
    background-color: var(--transparentGrey);
    position: absolute;
    height: 150%;
    width: 100%;
    top: -50%;
    left: 0;
    content: '';
    border-left: 1px solid var(--brokenWhite);
  }
`;

export const TitleBlock = styled.div`
  position: relative;
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};

  ::after {
    bottom: ${({ bottom }) => bottom};
    left: 0;
    position: absolute;
    content: '';
    width: 100%;
    height: 0.04vh;
    background-color: #ffffff8d;
  }
`;

export const Orders = styled.ul`
  height: ${({ height }) => height};

  overflow-y: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  margin: 1vh 0 0;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Order = styled.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 1vh;
  padding: 0 0.5vh;

  ::after {
    bottom: -1vh;
    left: 0;
    position: absolute;
    content: '';
    width: 100%;
    height: 0.04vh;
    background-color: #ffffff8d;
  }
`;

export const ItemImage = styled.img`
  width: 7.5vw;
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: end;
  position: relative;
  top: 1.2vh;
`;

export const OrderDetail = styled.span`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight}; ;
`;

export const DeleteOrder = styled.div`
  width: 2vw;
  height: 2vh;
  position: absolute;
  bottom: -0.15vh;
  right: -0.5vw;

  fill: var(--brokenWhite);
  opacity: 0.7;

  svg {
    width: 2vw;
    height: 2vh;
    transform: scale(0.75);
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  height: ${({ height }) => height};
  position: relative;
`;

export const OverflowTop = styled.span`
  content: '';
  background: linear-gradient(180deg, rgba(66, 66, 66, 0) 25%, rgba(31, 33, 34, 1) 100%);
  width: 100%;
  position: absolute;
  height: 4vh;
  top: -4vh;
  left: 0;
`;
