import { useEffect } from 'react';

const useScroll = (onScroll: () => void) => {
  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
};

export default useScroll;
