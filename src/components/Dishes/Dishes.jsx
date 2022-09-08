import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import useArrayRef from '../../hooks/useArrayRef';
import { ButtonSecondarySmall } from '../Button/Button.style';
import {
  Dish,
  DishesContainer,
  DishImage,
  DishTitle,
  DishDetails,
  OverFlowContainer
} from './Dishes.style';
import DishContext from '../../contexts/DishContext';
import ModalContext from '../../contexts/ModalContext';
import useAnimations from '../../hooks/useAnimations';

const Dishes = () => {
  // * CACHE ELEMENTS * //
  const { dishes, setDishes, dataDishes } = useContext(DishContext);
  const { setModal } = useContext(ModalContext);
  const [dishRefs, setDishRef] = useArrayRef();
  const { staggerFromBottomAnimation, fadeInAnimation } = useAnimations();
  const container = useRef();

  // * SET FIRST PROPERTY ACTIVE * //
  useEffect(() => {
    if (dataDishes) {
      const comboDishes = dataDishes.filter((d) => d.category === 'Combos');
      setTimeout(() => {
        setDishes(comboDishes);
      }, 750);
    }
  }, [dataDishes]);

  // * OPEN MODAL * //
  const handleModal = (id) => {
    const data = dishes.filter((d) => d.id === id);
    setModal({ visible: true, data });
  };

  // * ANIMATIONS * //
  //   Start animation
  useLayoutEffect(() => {
    staggerFromBottomAnimation(dishRefs.current, 0.04);
  }, [dishes]);

  return (
    <OverFlowContainer ref={container}>
      <DishesContainer>
        {dishes &&
          dishes.map((d) => {
            return (
              <Dish ref={setDishRef} key={d.id} onClick={() => handleModal(d.id)}>
                <DishImage src={require(`../../assets/images/${d.image}`)} />
                <DishTitle>{d.name}</DishTitle>
                <DishDetails>{`${d.price}€ ${
                  d.quantity == 1 ? `` : `/ ${d.quantity}pcs`
                }`}</DishDetails>
                <ButtonSecondarySmall fontSize="1vw" width="fit-content" height="fit-content">
                  Select
                </ButtonSecondarySmall>
              </Dish>
            );
          })}
      </DishesContainer>
    </OverFlowContainer>
  );
};

export default Dishes;
