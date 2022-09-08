import React, { useContext, useRef } from 'react';
import { BackgroundVerticalCenter, Container, FlexVerticalCenter } from '../styles/Spacing.style';
import { OptionButton, ButtonPrimary } from '../components/Button/Button.style';
import { ReactComponent as Qr } from '../assets/SVG/qr.svg';
import { ReactComponent as Card } from '../assets/SVG/card.svg';
import { ReactComponent as Counter } from '../assets/SVG/counter.svg';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer.style';
import useArrayRef from '../hooks/useArrayRef';
import { useLayoutEffect } from 'react';
import useAnimations from '../hooks/useAnimations';
import IdleTimerContext from '../contexts/IdleTimerContext';
import useSelector from '../hooks/useSelector';
import { Gif } from '../components/Gif/Gif.style';
import { Circle } from '../components/Shapes/shapes.style';
import gif from '../assets/images/GIF-2.gif';
import Logo from '../components/Logo/Logo';

const CheckOut = () => {
  // * CACHE ELEMENTS * //
  let navigate = useNavigate();
  const { staggerFromLeftAnimation, fadeOutAnimation, gifFooterAnimation } = useAnimations();
  const [refs, setRef] = useArrayRef();
  const [q, ref] = useSelector();
  const { resume } = useContext(IdleTimerContext);
  const [circles, setCircle] = useArrayRef();
  const buttons = useRef();
  const tl = useRef();

  // * RESUME IDLE TIMER * //
  resume();

  // * ANIMATIONS * //
  //   Start Animation
  useLayoutEffect(() => {
    staggerFromLeftAnimation(refs.current, 0.05, { ease: 'elastic.out(1, 1)', duration: 1 });
  }, []);

  //   Transition animation
  const handleOrderValidation = () => {
    tl.current.play();
    fadeOutAnimation(refs.current);
    setTimeout(() => {
      navigate('/order-validation');
    }, 5500);
  };

  //   Footer animation
  useLayoutEffect(() => {
    tl.current = gifFooterAnimation(q('.footer'), circles.current, q('.gif'));
  }, []);

  return (
    <BackgroundVerticalCenter ref={ref} padding="10vw 0 0">
      <FlexVerticalCenter ref={buttons} gap="2vw">
        <Container ref={setRef}>
          <Logo scale="0.8" />
        </Container>
        <OptionButton
          ref={setRef}
          onClick={() => handleOrderValidation()}
          width="55vw"
          border="0.1vw solid var(--brokenWhite)">
          <Qr />
          <span>QR pay</span>
        </OptionButton>
        <OptionButton
          ref={setRef}
          onClick={() => handleOrderValidation()}
          width="55vw"
          border="0.1vw solid var(--brokenWhite)">
          <Card />
          <span>Credit/Debit card</span>
        </OptionButton>
        <OptionButton
          ref={setRef}
          onClick={() => handleOrderValidation()}
          width="55vw"
          border="0.1vw solid var(--brokenWhite)">
          <Counter />
          <span>Pay at counter</span>
        </OptionButton>

        <ButtonPrimary
          ref={setRef}
          onClick={() => navigate('/menu')}
          width="55vw"
          height="10vw"
          position="relative"
          zIndex="100"
          borderRadius="1.5vw">
          Edit your order
        </ButtonPrimary>
      </FlexVerticalCenter>

      <Gif className="gif" src={gif} bottom="14vh" />
      <Circle ref={setCircle} bottom="-20vh" />
      <Circle ref={setCircle} bottom="-19vh" />
      <Circle ref={setCircle} bottom="-18vh" />
      <Footer className="footer" height="20vh" />
      <Footer height="20vh" />
    </BackgroundVerticalCenter>
  );
};

export default CheckOut;
