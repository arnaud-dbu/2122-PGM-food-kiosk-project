import React, { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { Container } from '../../styles/Spacing.style';
import { H1, H2 } from '../../styles/Typography.style';
import { ButtonPrimary } from '../Button/Button.style';
import { IdleTimerComponent, IdleTimerContent } from './IdleTimer.style';

const IdleTimer = () => {
  const timeout = 10000;
  const [remaining, setRemaining] = useState(timeout);
  const [isIdle, setIsIdle] = useState(false);

  const seconds = Math.floor(remaining / 1000);

  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => setIsIdle(true);

  const { reset, pause, resume, getRemainingTime } = useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle
  });

  const handleReset = () => reset();
  const handlePause = () => pause();
  const handleResume = () => resume();

  useEffect(() => {
    setInterval(() => {
      setRemaining(getRemainingTime());
    }, 1000);
  }, []);

  pause();

  return (
    <IdleTimerComponent>
      <Container bg="var(--black)" borderRadius="4vw">
        <IdleTimerContent>
          <H1>Your session is about to expire</H1>
          <H2>{seconds}s</H2>
          <ButtonPrimary>Continue ordering</ButtonPrimary>
        </IdleTimerContent>
      </Container>
    </IdleTimerComponent>
  );
};

export default IdleTimer;
