import gsap from 'gsap';

function useAnimations() {
  const swipeToAnimation = (target, x, vars) => {
    return gsap.to(target, {
      x: x,
      opacity: 0,
      ...vars
    });
  };

  const swipeFromAnimation = (target, x, vars) => {
    return gsap.from(target, {
      x: x,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
      ...vars
    });
  };

  const staggerFromBottomAnimation = (target, stagger, vars) => {
    return gsap.from(target, { opacity: 0, y: 200, stagger: stagger, ...vars });
  };

  const staggerFromLeftAnimation = (target, stagger, vars) => {
    return gsap.from(target, {
      x: '-150vw',
      opacity: 0,
      stagger: stagger,
      ...vars
    });
  };

  const staggerToRightAnimation = (target, stagger, vars) => {
    return gsap.to(target, {
      x: '150vw',
      opacity: 0,
      stagger: stagger,
      ...vars
    });
  };

  const fadeInFromTopAnimation = (target, vars) => {
    return gsap.from(target, {
      y: '-10vh',
      opacity: 0,
      duration: 0.25,
      ease: 'power3.out'
    });
  };

  const pressAnimation = (target, vars) => {
    return gsap.to(target, {
      scale: 1.1,
      duration: 0.1,
      ease: 'power4.out',
      ...vars
    });
  };

  const flashingLoopAnimation = (target1, target2) => {
    gsap
      .timeline({ repeat: -1, yoyo: true })
      .to(target1, { duration: 2.5, yoyo: true, repeat: 2, opacity: 1 })
      .to(target2, { duration: 0.3, scale: 1.1, repeat: 2, y: -10 }, '<2.5');
  };

  const fadeOutAnimation = (target, vars) => {
    return gsap.to(target, { opacity: 0, duration: 1.5, ease: 'power2.in', ...vars });
  };

  const fadeInAnimation = (target, vars) => {
    return gsap.from(target, { opacity: 0, duration: 1, ease: 'power2.in', ...vars });
  };

  const gifFooterAnimation = (target1, target2, target3) => {
    return gsap
      .timeline({ paused: true, defaults: { ease: 'elastic.out(1, 0.9)', duration: 1 } })
      .from(target1, { y: 500 }, 0.35)
      .from(target2, { scale: 0, stagger: 0.1 }, 0.6)
      .from(target3, { y: -100, opacity: 0 }, 1.1);
  };

  return {
    flashingLoopAnimation,
    fadeInAnimation,
    gifFooterAnimation,
    fadeOutAnimation,
    swipeFromAnimation,
    fadeInFromTopAnimation,
    swipeToAnimation,
    staggerFromBottomAnimation,
    staggerFromLeftAnimation,
    staggerToRightAnimation,
    pressAnimation
  };
}

export default useAnimations;
