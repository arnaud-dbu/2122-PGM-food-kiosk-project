import styled from 'styled-components';

export const CategoryContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 2.5vw 0 2vw;
  gap: 1vh;
  position: relative;

  &::before {
    content: '';
    height: 100vh;
    width: 0.1vw;
    background-color: var(--brokenWhite);
    opacity: 0.8;
    position: absolute;
    right: 0vw;
  }
`;

export const Category = styled.li`
  width: 12vw;
  height: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5vh;
  justify-content: center;
  outline: 0.05vh solid var(--brokenWhite);
  border-radius: var(--borderRadius-1);
  transition: background-color 0.1s ease;
  cursor: pointer;

  &.active {
    outline: none;
    background-color: var(--orange);
  }

  img {
    width: 4vw;
  }

  span {
    color: var(--brokenWhite);
    font-size: 1.4vw;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
  }
`;
