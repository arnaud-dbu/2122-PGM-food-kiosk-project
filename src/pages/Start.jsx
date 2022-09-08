import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Footer } from '../components/Footer/Footer.style';
import Logo from '../components/Logo/Logo';
import {
  BackgroundVerticalCenter,
  Container,
  FlexVerticalCenter,
  SVG
} from '../styles/Spacing.style';
import gif from '../assets/images/GIF-1.gif';
import { Gif } from '../components/Gif/Gif.style';
import { MdTouchApp } from 'react-icons/md';
import { H1 } from '../styles/Typography.style';
import { useNavigate } from 'react-router-dom';
import useSelector from '../hooks/useSelector';
import useArrayRef from '../hooks/useArrayRef';
import { Circle } from '../components/Shapes/shapes.style';
import useAnimations from '../hooks/useAnimations';

const Start = () => {
  // * CACHE ELEMENTS * //
  let navigate = useNavigate();
  const [q, ref] = useSelector();
  const [circles, setCircle] = useArrayRef();
  const [refs, setRef] = useArrayRef();
  const tl = useRef();
  const {
    staggerFromLeftAnimation,
    staggerToRightAnimation,
    gifFooterAnimation,
    flashingLoopAnimation
  } = useAnimations();

  // * ANIMATIONS * //
  //   Start animation
  useLayoutEffect(() => {
    staggerFromLeftAnimation(refs.current, 0.05, { ease: 'elastic.out(1, 0.9)', duration: 1.25 });
    tl.current = gifFooterAnimation(q('.footer'), circles.current, q('.gif')).play();
  }, []);

  //   Tap anywhere animation
  useEffect(() => {
    flashingLoopAnimation(q('.tapAnywhere'), q('.touchIcon'));
  }, []);

  //   Transition animation
  const handleNextPage = () => {
    tl.current.reverse();
    staggerToRightAnimation(refs.current, 0.05, {
      ease: 'elastic.out(1, 0.7)',
      duration: 1,
      delay: 1.5
    });
    setTimeout(() => {
      navigate('/order-type');
    }, 1700);
  };

  return (
    <BackgroundVerticalCenter onClick={() => handleNextPage()} ref={ref} margin="6vh 0 0">
      <Container ref={setRef}>
        <Logo />
      </Container>

      <FlexVerticalCenter
        ref={setRef}
        className="tapAnywhere"
        justify="center"
        height="45vh"
        gap="1vh">
        <SVG className="touchIcon">
          <MdTouchApp size="8vw" />
        </SVG>
        <H1 textAlign="center" size="5vw">
          Tap anywhere
          <br />
          to start your order
        </H1>
      </FlexVerticalCenter>

      <Gif className="gif" src={gif} bottom="19vh" />
      <Circle ref={setCircle} bottom="-15vh" />
      <Circle ref={setCircle} bottom="-14.3vh" />
      <Circle ref={setCircle} bottom="-13.4vh" />
      <Footer className="footer" height="25vh" />
    </BackgroundVerticalCenter>
  );
};

export default Start;
