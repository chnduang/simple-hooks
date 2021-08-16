import { useEffect, useRef } from 'react';

const useUnMountedRef = () => {
  const unMountedRef = useRef(false);
  useEffect(() => {
    unMountedRef.current = false;
    return () => {
      unMountedRef.current = true;
    };
  }, []);
  return unMountedRef;
};

export default useUnMountedRef;
