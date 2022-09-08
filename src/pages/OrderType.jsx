import { OptionButton } from '../components/Button/Button.style';
import Logo from '../components/Logo/Logo';
import { BackgroundContainer, Container, FlexVerticalCenter } from '../styles/Spacing.style';
import { H1 } from '../styles/Typography.style';
import { Footer } from '../components/Footer/Footer.style';
import { GiFastNoodles } from 'react-icons/gi';
import { GiNoodles } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { useContext, useLayoutEffect, useRef } from 'react';
import useSelector from '../hooks/useSelector';
import useArrayRef from '../hooks/useArrayRef';
import OrderContext from '../contexts/OrderContext';
import IdleTimerContext from '../contexts/IdleTimerContext';
import useAnimations from '../hooks/useAnimations';

const OrderType = () => {
  // * CACHE ELEMENTS * //
  let navigate = useNavigate();
  const [q, ref] = useSelector();
  const [refs, setRef] = useArrayRef();
  const tl = useRef();
  const { setOrderType } = useContext(OrderContext);
  const { resume } = useContext(IdleTimerContext);
  const { staggerFromLeftAnimation, staggerToRightAnimation } = useAnimations();

  // * RESUME IDLE TIMER * //
  resume();

  // * ANIMATIONS * //
  //   Start animation
  useLayoutEffect(() => {
    staggerFromLeftAnimation(refs.current, 0.075, { ease: 'elastic.out(1, 1.25)', duration: 1 });
    tl.current = gsap.from(q('.footer'), { y: '50vh', delay: 0.25, ease: 'elastic.out(1, 1.25)' });
  }, []);

  // * GO TO THE NEXT PAGE  * //
  const handleOrderDetail = async (val) => {
    // Set order type to takeaway or eat-in
    setOrderType(val);

    // Transition animation
    tl.current.reverse();
    staggerToRightAnimation(refs.current, 0.05, { ease: 'elastic.out(1, 0.7)', duration: 2 });
    setTimeout(() => {
      navigate('/menu');
    }, 550);
  };

  return (
    <>
      <BackgroundContainer ref={ref} margin="20vh 0 0 0">
        <FlexVerticalCenter gap="3vh">
          <Container ref={setRef}>
            <Logo />
          </Container>

          <H1 ref={setRef}>Where will you be eating today?</H1>

          <Container ref={setRef} display="flex" gap="3vw">
            <OptionButton onClick={() => handleOrderDetail('Eat in')}>
              <GiNoodles />
              <span>Eat in</span>
            </OptionButton>
            <OptionButton onClick={() => handleOrderDetail('Take out')}>
              <GiFastNoodles />
              <span>Take out</span>
            </OptionButton>
          </Container>
        </FlexVerticalCenter>

        <Footer className="footer" height="50vh" />
      </BackgroundContainer>
    </>
  );
};

export default OrderType;
