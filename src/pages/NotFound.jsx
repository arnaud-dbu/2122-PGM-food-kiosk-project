import React, { useEffect, useRef } from 'react';
import { Footer } from '../components/Footer/Footer.style';
import { Lottie } from '../components/Lottie/Lottie.style';
import { BackgroundVerticalCenter, FlexVerticalCenter } from '../styles/Spacing.style';
import { H1 } from '../styles/Typography.style';
import lottie from 'lottie-web';
import { ButtonSecondarySmall } from '../components/Button/Button.style';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  // * CACHE ELEMENTS * //
  const container = useRef(null);
  const navigate = useNavigate();

  // * ANIMATIONS * //
  //   Lottie animation settings
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/lottiefiles/angry-sushi.json')
    });
  }, []);

  return (
    <BackgroundVerticalCenter justify="center">
      <FlexVerticalCenter
        gap="2vh"
        bg="var(--transparentGrey)"
        padding="20vh 10vw 5vh"
        margin="0 0 15vh"
        borderRadius="4vw">
        <Lottie scale="7.5" className="container" ref={container} bottom="7vh" />
        <H1 textAlign="center" size="5vw">
          Oeps...
          <br />
          something went wrong
        </H1>
        <ButtonSecondarySmall onClick={() => navigate('/')}>Go back</ButtonSecondarySmall>
      </FlexVerticalCenter>
      <Footer height="20vh" />
    </BackgroundVerticalCenter>
  );
};

export default NotFound;
