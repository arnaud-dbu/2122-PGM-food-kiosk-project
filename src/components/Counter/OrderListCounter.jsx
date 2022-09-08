import React, { useContext, useEffect } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import OrderContext from '../../contexts/OrderContext';
import { CounterButton, CounterContainer, CounterValue } from './Counter.style';

const OrderListCounter = ({ item }) => {
  // * CACHE ELEMENTS * //
  const { order, setOrder } = useContext(OrderContext);

  // * INCREASE BUTTON * //
  const handlePlus = (ev) => {
    ev.preventDefault();
    // Get corresponding dish item
    const obj = order.filter((o) => o.id == item.id)[0];
    // Increase quantity by 1
    const val = obj.quantity++;
    // Merge to a new object
    const newObj = { ...obj, ...val };
    // Remove existing object and create a new array
    const filterOrder = order.filter((o) => o.id !== item.id);
    const newOrderArr = [...filterOrder, newObj];

    setOrder(newOrderArr);
  };

  // * DECREASE BUTTON * //
  const handleMin = (ev) => {
    ev.preventDefault();
    // Get corresponding dish item
    const obj = order.filter((o) => o.id == item.id)[0];
    // Decrease quantity by 1
    const val = obj.quantity--;
    // Merge to a new object
    const newObj = { ...obj, ...val };
    // Remove existing object and create a new array
    const filterOrder = order.filter((o) => o.id !== item.id);
    const newOrderArr = [...filterOrder, newObj];

    setOrder(newOrderArr);
  };

  // * REMOVE ORDER WHEN NULL * //
  useEffect(() => {
    const obj = order.filter((o) => o.id == item.id)[0];
    if (obj.quantity < 1) {
      const filterItems = order.filter((o) => o.id !== item.id);
      setOrder(filterItems);
    }
  }, [order]);

  return (
    <CounterContainer>
      <CounterButton
        width="3vw"
        height="2.5vw"
        borderRadius="0.5vw"
        svgScale="scale(0.7)"
        bg="var(--transparentGrey)"
        onClick={(ev) => handleMin(ev)}>
        <AiOutlineMinus />
      </CounterButton>
      <CounterValue fontSize="1.5vw" width="2.5vw">
        {item.quantity}
      </CounterValue>
      <CounterButton
        width="3vw"
        height="2.5vw"
        borderRadius="0.5vw"
        svgScale="scale(0.7)"
        onClick={(ev) => handlePlus(ev)}>
        <AiOutlinePlus />
      </CounterButton>
    </CounterContainer>
  );
};

export default OrderListCounter;
