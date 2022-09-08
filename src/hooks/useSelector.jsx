import gsap from 'gsap';
import { useMemo, useRef } from 'react';

function useSelector() {
  const ref = useRef();
  const q = useMemo(() => gsap.utils.selector(ref), [ref]);
  return [q, ref];
}

export default useSelector;
