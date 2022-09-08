import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import {
  DeleteOrder,
  Footer,
  ItemImage,
  Order,
  OrderDetail,
  OrderDetails,
  OrderListContainer,
  Orders,
  OverflowTop,
  TitleBlock
} from './OrderList.style';
import { H2, H3 } from '../../styles/Typography.style';
import { ButtonPrimary, ButtonSecondary } from '../Button/Button.style';
import { Container, FlexVerticalCenter } from '../../styles/Spacing.style';
import { ImBin } from 'react-icons/im';
import OrderListCounter from '../Counter/OrderListCounter';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderContext from '../../contexts/OrderContext';
import TimeLineContext from '../../contexts/TimeLineContext';
import useSelector from '../../hooks/useSelector';
import gsap from 'gsap';
import useArrayRef from '../../hooks/useArrayRef';
import useAnimations from '../../hooks/useAnimations';
import ModalContext from '../../contexts/ModalContext';

const OrderList = ({ tl }) => {
  // * CACHE ELEMENTS * //
  const { order, setOrder, orderType } = useContext(OrderContext);
  const { mainTl } = useContext(TimeLineContext);
  const { modal } = useContext(ModalContext);
  const [q, orderListRef] = useSelector();
  const [orderRefs, setOrderRef] = useArrayRef();
  const [total, setTotal] = useState(0);
  let navigate = useNavigate();
  const orderListTl = useRef();
  const orderRef = useRef();
  const { swipeFromAnimation } = useAnimations();

  // * SORT ORDER LIST * //
  const sortOrder = order.sort((a, b) => a.createdAt - b.createdAt);

  // * CALCULATE TOTAL AMOUNT ORDERS * //
  useEffect(() => {
    let sum = 0;
    order.forEach((o) => (sum += o.quantity * o.price));
    setTotal(sum.toFixed(2));
  }, [order]);

  // * DELETE BUTTON * //
  const handleDeleteOrder = (id) => {
    // Find index
    const index = order.findIndex((object) => object.id === id);
    // Add swipe away animation when item is deleted
    gsap.to(orderRefs.current[index], { x: '30vw', opacity: 0, ease: 'power2.out' });
    // Remove item from [order]
    order.splice(index, 1);
    // Reset order list
    const filterItems = order.filter((o) => o.id !== id);
    setTimeout(() => {
      setOrder(filterItems);
    }, 300);
  };

  // * CANCEL ORDER * //
  const handleCancelOrder = (ev) => {
    ev.preventDefault();
    orderListTl.current.reverse();
    setTimeout(() => {
      setOrder([]);
    }, 350);
  };

  // * PAY BUTTON * //
  const handleCheckOut = (ev) => {
    ev.preventDefault();
    tl.current.reverse();
    mainTl.play();
    setTimeout(() => {
      navigate('/checkout');
      mainTl.pause();
    }, 850);
  };

  // * ANIMATIONS * //

  // Start animation
  useEffect(() => {
    orderListTl.current = swipeFromAnimation(orderListRef.current, '20vw');
  }, []);

  // Swipe in when new order is added
  useEffect(() => {
    // Only add animation if added order is not existing yet
    if (modal.data) {
      const addedItem = order.filter((o) => o.id === modal.data[0].id);
      if (orderRef.current && addedItem[0]) {
        if (orderRef.current.innerText.includes(addedItem[0].name)) {
          swipeFromAnimation(orderRef.current, '20vw');
        }
      }
    }
  }, [order]);

  return (
    <OrderListContainer ref={orderListRef}>
      <TitleBlock bottom="-1vh">
        <H2>My Order</H2>
        <H3>{orderType}</H3>
      </TitleBlock>

      <Orders>
        {sortOrder.map((item) => {
          return (
            <Container ref={orderRef} key={item.id}>
              <Order ref={setOrderRef}>
                <FlexVerticalCenter>
                  <ItemImage src={require(`../../assets/images/${item.image}`)} />
                  <OrderListCounter item={item} />
                </FlexVerticalCenter>

                <Container display="flex" dir="column" align="end" justify="space-between">
                  <OrderDetails>
                    <OrderDetail size="1.25vw" weight="700">
                      {item.name}
                    </OrderDetail>
                    <OrderDetail size="1vw" weight="200">
                      {item.quantity} x {item.price}€ ({(item.quantity * item.price).toFixed(2)}€)
                    </OrderDetail>
                  </OrderDetails>

                  <DeleteOrder onClick={() => handleDeleteOrder(item.id)}>
                    <ImBin />
                  </DeleteOrder>
                </Container>
              </Order>
            </Container>
          );
        })}
      </Orders>

      <Footer>
        <OverflowTop />
        <TitleBlock bottom="5vh" margin="1vh 0 0">
          <H3 color="var(--brokenWhite)">Total</H3>
          <H2 margin="0 0 1vh">{total}€</H2>
        </TitleBlock>

        <Container display="flex" dir="column" gap="1vh">
          <ButtonPrimary onClick={(ev) => handleCheckOut(ev)} height="10vh" width="100%">
            Pay
          </ButtonPrimary>
          <ButtonSecondary onClick={(ev) => handleCancelOrder(ev)} width="100%" fontSize="2vw">
            Cancel
          </ButtonSecondary>
        </Container>
      </Footer>
    </OrderListContainer>
  );
};

export default OrderList;
