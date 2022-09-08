import React, { useContext, useLayoutEffect, useRef } from 'react';
import { ButtonPrimary, ButtonSecondary } from '../Button/Button.style';
import { FlexVerticalCenter } from '../../styles/Spacing.style';
import { DishDetails, DishImage, DishTitle } from '../Dishes/Dishes.style';
import { DishContainer, DishDescription, ModalBackground } from './modal.style';
import { AiOutlineClose } from 'react-icons/ai';
import OrderContext from '../../contexts/OrderContext';
import CountContext from '../../contexts/CountContext';
import ModalContext from '../../contexts/ModalContext';
import useSelector from '../../hooks/useSelector';
import ModalCounter from '../Counter/ModalCounter';
import useAnimations from '../../hooks/useAnimations';

const Modal = ({ data }) => {
  // * CACHE ELEMENTS * //
  const { order, setOrder } = useContext(OrderContext);
  const { count } = useContext(CountContext);
  const { setModal } = useContext(ModalContext);
  const [q, ref] = useSelector();
  const { pressAnimation, fadeInFromTopAnimation } = useAnimations();
  let tl = useRef();

  // * ADD ORDER * //
  const handleOrder = (ev) => {
    ev.preventDefault();
    //  Add button-press animation
    const animation = pressAnimation(q('.add'), { onComplete: () => animation.reverse() });

    // Check if order is already registered
    const orderExisting = order.filter((o) => o.id == data.id);

    // If not, create a new order
    if (!orderExisting.length) {
      const newOrder = [
        {
          id: data.id,
          name: data.name,
          image: data.image,
          price: data.price,
          quantity: count,
          createdAt: Date.now()
        }
      ];
      setOrder([...order, ...newOrder]);
      // Else, adapt existing order
    } else {
      const filterOrder = order.filter((o) => o.id !== data.id);
      const adaptObj = [{ ...orderExisting[0], quantity: count }];
      setOrder([...adaptObj, ...filterOrder]);
    }

    // reverse animation and close modals
    tl.current.reverse();
    setTimeout(() => {
      setModal({ visible: false, data: null });
    }, 300);
  };

  // * CLOSE BUTTON * //
  const handleCloseBtn = (ev) => {
    ev.preventDefault();

    // reverse animation and close modals
    tl.current.reverse();
    setTimeout(() => {
      setModal({ visible: false, data: null });
    }, 300);
  };

  // * CANCEL ORDER BUTTON * //
  const handleCancelOrder = (ev) => {
    ev.preventDefault();

    // remove order from order list
    const filterItems = order.filter((item) => item.id !== data.id);
    setOrder(filterItems);

    // reverse animation and close modal
    tl.current.reverse();
    setTimeout(() => {
      setModal({ visible: false, data: null });
    }, 1000);
  };

  // * ANIMATIONS * //
  //   Modal opening animation
  useLayoutEffect(() => {
    tl.current = fadeInFromTopAnimation(ref.current);
  }, []);

  return (
    <ModalBackground ref={ref}>
      <FlexVerticalCenter gap="1.5vh" margin="0 0 15vh">
        <ButtonSecondary width="7.5vw" height="5vh" svg="1.5" onClick={(ev) => handleCloseBtn(ev)}>
          <AiOutlineClose />
        </ButtonSecondary>

        <DishContainer>
          <DishImage width="25vw" src={require(`../../assets/images/${data.image}`)} />
          <FlexVerticalCenter>
            <DishTitle fontSize="4vw">{data.name}</DishTitle>
            <DishDetails fontSize="2.5vw">{`${data.price}€ ${
              data.quantity == 1 ? `` : `/ ${data.quantity}pcs`
            }`}</DishDetails>{' '}
            <DishDescription>{data.description}</DishDescription>
            <ModalCounter count={count} data={data} order={order} />
          </FlexVerticalCenter>
        </DishContainer>

        <ButtonPrimary className="add" onClick={(ev) => handleOrder(ev)}>
          Add to cart
        </ButtonPrimary>
        <ButtonSecondary onClick={(ev) => handleCancelOrder(ev)} fontSize="2.25vw">
          Cancel order
        </ButtonSecondary>
      </FlexVerticalCenter>
    </ModalBackground>
  );
};

export default Modal;
