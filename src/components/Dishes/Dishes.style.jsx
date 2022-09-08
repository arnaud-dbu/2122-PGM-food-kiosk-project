import styled from 'styled-components';

export const DishesContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  row-gap: 1.5vh;
  flex-wrap: wrap;
  overflow-y: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 6vh;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const OverFlowContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: 0 2.5vw 0;
  opacity: 1;

  ::after {
    content: '';
    background-color: red;
    position: absolute;
    width: 100%;
    height: 10vh;
    background: linear-gradient(0deg, var(--black) 25%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    animation-name: fadeIn;
    animation-duration: 7s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const Dish = styled.li`
  background-color: var(--transparentGrey);
  border-radius: var(--borderRadius-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(50% - 3.25vw);
  padding: 0 1vw 1.5vh;
`;

export const DishImage = styled.img`
  width: ${({ width }) => width || '10vw'};
`;

export const DishTitle = styled.span`
  font-family: ab-karuta-bold, sans-serif;
  font-size: ${({ fontSize }) => fontSize || '2vw'};
  text-align: center;
  color: var(--brokenWhite);
  position: relative;
  bottom: 0.5vh;
  margin-bottom: 0.25vh;
`;

export const DishDetails = styled.span`
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize || '1.3vw'};
  color: var(--orange);
  position: relative;
  bottom: 0.5vh;
`;
