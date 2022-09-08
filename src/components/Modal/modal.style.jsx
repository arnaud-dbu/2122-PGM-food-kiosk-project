import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DishContainer = styled.div`
  width: 100%;
  max-width: 70vw;
  background-color: var(--transparentGrey);
  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 2vw;
  padding: 0 2vw 4vh;
`;

export const DishDescription = styled.p`
  text-align: center;
  margin: 1vh 0 2vh;
  width: 100%;
  max-width: 60vw;
`;
