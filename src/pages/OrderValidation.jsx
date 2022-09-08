import gsap from 'gsap';
import { BackgroundVerticalCenter, Container, FlexVerticalCenter } from '../styles/Spacing.style';
import React, { useEffect, useRef } from 'react';
import { H1, KarutaHeader } from '../styles/Typography.style';
import OrderNumberComponent from '../components/OrderNumber/OrderNumber';
import { Footer } from '../components/Footer/Footer.style';
import lottie from 'lottie-web';
import { Lottie } from '../components/Lottie/Lottie.style';
import { Circle } from '../components/Shapes/shapes.style';
import useSelector from '../hooks/useSelector';
import { useLayoutEffect } from 'react';

const OrderValidation = () => {
  // * CACHE ELEMENTS * //
  const container = useRef(null);
  const [q, ref] = useSelector();

  // * ANIMATIONS * //
  //   Lottie animation settings
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/lottiefiles/smile.json')
    });
  });

  //   Fade in animation
  useLayoutEffect(() => {
    gsap
      .timeline({ defaults: { opacity: 0, duration: 3 } })
      .from(q('.titleBlock'), {})
      .from(q('.orderNumberComponent'), {}, '<0.75');
  }, []);

  return (
    <>
      <BackgroundVerticalCenter ref={ref} padding="10vw 0 0">
        <FlexVerticalCenter gap="10vh">
          <FlexVerticalCenter className="titleBlock" gap="2vw">
            <Lottie className="container" ref={container} scale="5" />
            <H1>THANKS FOR YOUR ORDER</H1>
            <KarutaHeader>
              You maki
              <br />
              miso happy
            </KarutaHeader>
          </FlexVerticalCenter>

          <OrderNumberComponent number="57" />
        </FlexVerticalCenter>

        <Circle bottom="-20vh" />
        <Circle bottom="-19vh" />
        <Circle bottom="-18vh" />
        <Footer className="footer" height="20vh" />
      </BackgroundVerticalCenter>
    </>
  );
};

export default OrderValidation;
