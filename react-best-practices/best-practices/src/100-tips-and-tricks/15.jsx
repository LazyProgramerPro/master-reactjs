import { useEffect, useRef } from "react";

const AComponent = () => {
  const ref = useRef(0);

  useEffect(() => {
    ref.current = 123;
  });

  const clickHandler = () => {
    //doSomeStuff(ref.current)
  };

  return <p></p>;
};
