import { useEffect, useRef } from "react";

const useEffectAfterMount = (callback, deps) => {
  const hasMounted = useRef(false);
  useEffect(() => {
    if (hasMounted.current) {
      return callback();
    }
    hasMounted.current = true;
  }, [...deps, callback]);
};
