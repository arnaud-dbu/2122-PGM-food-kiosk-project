import gsap from 'gsap';
import { createContext } from 'react';
import { useState } from 'react';

const TimeLineContext = createContext();

export function TimeLineProvider({ children }) {
  const [mainTl, setMainTl] = useState(() => gsap.timeline({ paused: true }));

  return (
    <TimeLineContext.Provider value={{ mainTl, setMainTl }}>{children}</TimeLineContext.Provider>
  );
}

export default TimeLineContext;
