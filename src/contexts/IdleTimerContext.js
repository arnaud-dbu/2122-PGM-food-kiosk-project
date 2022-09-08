import gsap from 'gsap';
import { createContext, useEffect, useRef, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { useNavigate } from 'react-router-dom';
import { ButtonPrimary } from '../components/Button/Button.style';
import { IdleTimerComponent, IdleTimerContent } from '../components/IdleTimer/IdleTimer.style';
import { Container } from '../styles/Spacing.style';
import { H1, H2 } from '../styles/Typography.style';

const IdleTimerContext = createContext();

export function IdleTimerProvider({ children }) {
  const timeout = 30000;
  const [remaining, setRemaining] = useState(timeout);
  const [isIdle, setIsIdle] = useState(false);
  const [show, setShow] = useState(true);
  let navigate = useNavigate();

  const seconds = Math.floor(remaining / 1000);

  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => setIsIdle(true);

  const { reset, pause, resume, getRemainingTime } = useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle
  });

  useEffect(() => {
    setInterval(() => {
      setRemaining(getRemainingTime());
    }, 1000);
  }, []);

  pause();

  useEffect(() => {
    if (isIdle) {
      navigate('/');
      reset();
    }
  }, [isIdle]);

  const idleTimer = useRef();

  useEffect(() => {
    if (remaining < 10000) {
      gsap.to(idleTimer.current, { y: '100vh', ease: 'power4.out' });
    } else {
      gsap.to(idleTimer.current, { y: '-100vh' });
    }
  });

  return (
    <IdleTimerContext.Provider value={{ resume, pause, reset, isIdle }}>
      <IdleTimerComponent ref={idleTimer} className={show ? 'visible' : 'hidden'}>
        <Container bg="var(--black)" borderRadius="4vw">
          <IdleTimerContent>
            <H1>Your session is about to expire</H1>
            <H2>{seconds}s</H2>
            <ButtonPrimary>Tap anywhere to continue</ButtonPrimary>
          </IdleTimerContent>
        </Container>
      </IdleTimerComponent>
      {children}
    </IdleTimerContext.Provider>
  );
}

export default IdleTimerContext;
