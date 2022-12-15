import { useState, useRef, useCallback, useLayoutEffect } from 'react';

export default function useWindowWidth() {
  const timer = useRef<number | null>(null);
  const [width, setWidth] = useState(window.innerWidth);

  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  const onResize = useCallback(() => {
    clearTimer();
    timer.current = window.setTimeout(() => {
      timer.current = null;
      setWidth(window.innerWidth);
    }, 100);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', onResize, false);
    return () => {
      clearTimer();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return width;
}
