import styled from 'styled-components';

export const IdleTimerComponent = styled.div`
  background-color: #a5a2a26c;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -100vh;
`;

export const IdleTimerContent = styled.div`
  background-color: var(--transparentGrey);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vh;
  margin: 1vw;
  padding: 6vw 4vw;
  border-radius: 4vw;

  h1 {
    font-size: 3vw;
    font-weight: 700;
    text-align: center;
  }

  h2 {
    font-size: 6vw;
    font-weight: 200;
  }

  a {
    height: fit-content;
    padding: 2vw;
    font-size: 2vw;
  }
`;
