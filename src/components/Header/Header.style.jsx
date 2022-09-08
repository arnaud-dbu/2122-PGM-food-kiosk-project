import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw 0 2vw;
  height: 17.5vh;

  h3 {
    font-size: 1.5vw;
  }
`;

export const CallHelp = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5vw;

  svg {
    width: 2vw;
    height: 2vh;
  }
`;

export const Languages = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5vw;

  span {
    font-size: 1.5vw;
    color: var(--brokenWhite);

    &.active {
      border: 0.1vw solid var(--orange);
      border-radius: 0.5vw;
      padding: 0.5vw;
    }
  }
`;
