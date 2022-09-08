import gsap from 'gsap';
import { useContext, useEffect, useLayoutEffect } from 'react';
import Categories from '../components/Categories/Categories';
import Header from '../components/Header/Header';
import OrderList from '../components/OrderList/OrderList';
import { BackgroundContainer, Container } from '../styles/Spacing.style';
import Modal from '../components/Modal/modal';
import Dishes from '../components/Dishes/Dishes';
import { Footer } from '../components/Footer/Footer.style';
import ModalContext from '../contexts/ModalContext';
import OrderContext from '../contexts/OrderContext';
import { useRef } from 'react';
import useSelector from '../hooks/useSelector';
import TimeLineContext from '../contexts/TimeLineContext';
import IdleTimerContext from '../contexts/IdleTimerContext';

const Menu = () => {
  // * CACHE ELEMENTS * //
  const { modal } = useContext(ModalContext);
  const { order } = useContext(OrderContext);
  const [q, ref] = useSelector();
  const { mainTl } = useContext(TimeLineContext);
  const tl = useRef();
  const { resume } = useContext(IdleTimerContext);

  // * RESUME IDLE TIMER * //
  resume();

  // * ANIMATIONS * //
  //   Start animation
  useLayoutEffect(() => {
    tl.current = gsap
      .timeline({ defaults: { ease: 'elastic.out(1, 1)' } })
      .from(q('.header'), { y: '-400', opacity: 0 }, 0.4)
      .from(q('.footer'), { y: '20vh' }, 0.6);
  }, []);

  //   Transition animation
  useEffect(() => {
    mainTl.to(ref.current, {
      x: '100vw',
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      ease: 'elastic.out(1, 2)'
    });
  }, [mainTl]);

  return (
    <>
      <BackgroundContainer ref={ref}>
        <Header className="header" />

        <Container display="flex" height="75vh">
          <Categories />
          <Dishes />
          {order.length > 0 && <OrderList tl={tl} />}
        </Container>

        {modal.visible && <Modal data={modal.data[0]} />}
        <Footer className="footer" height="12.5vh" />
      </BackgroundContainer>
    </>
  );
};

export default Menu;
