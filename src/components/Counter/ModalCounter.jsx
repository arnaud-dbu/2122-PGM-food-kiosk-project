import React, { useContext } from 'react';
import { useEffect } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import CountContext from '../../contexts/CountContext';
import OrderContext from '../../contexts/OrderContext';
import useAnimations from '../../hooks/useAnimations';
import useSelector from '../../hooks/useSelector';
import { CounterButton, CounterContainer, CounterValue } from './Counter.style';

const ModalCounter = ({ data }) => {
  // * CACHE ELEMENTS * //
  const { count, setCount } = useContext(CountContext);
  const { order } = useContext(OrderContext);
  const [q, ref] = useSelector();
  const { pressAnimation } = useAnimations();

  // * INCREASE BUTTON * //
  const handlePlus = (ev) => {
    ev.preventDefault();
    setCount((prevCount) => prevCount + 1);
    const animation = pressAnimation(q('.plusBtn'), { onComplete: () => animation.reverse() });
  };

  // * DECREASE BUTTON * //
  const handleMin = (ev) => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      const animation = pressAnimation(q('.minBtn'), {
        onComplete: () => animation.reverse()
      });
    }
  };

  // * SET AMOUNT OF ORDERS * //
  useEffect(() => {
    if (order) {
      // Check if order is already registered
      const orderExisting = order.filter((o) => o.id == data.id);

      // If not, set count value to 1
      if (!orderExisting.length) {
        setCount(1);
      } else {
        // Else, set the amount of registered orders
        setCount(orderExisting[0].quantity);
      }
    }
  }, []);

  return (
    <CounterContainer ref={ref}>
      <CounterButton className="minBtn" bg="var(--transparentGrey)" onClick={() => handleMin()}>
        <AiOutlineMinus />
      </CounterButton>
      <CounterValue className="countValue">{count}</CounterValue>
      <CounterButton className="plusBtn" onClick={(ev) => handlePlus(ev)}>
        <AiOutlinePlus />
      </CounterButton>
    </CounterContainer>
  );
};

export default ModalCounter;
