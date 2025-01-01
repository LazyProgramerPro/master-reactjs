import { useCallback, useEffect, useRef, useState } from "react";

const AComponent = () => {
  const [show, setShow] = useState(false);
  const [height, setHeight] = useState(0);
  //const refElement = useRef(null);

  // useEffect(() => {
  //   if (refElement.current) {
  //     setHeight(refElement.current.offsetHeight);
  //   }
  // }, [refElement.current]);

  const refElement = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {!show ? "show" : "hide"} tags
      </button>

      {show && (
        <>
          <h1 ref={refElement}>Hello, dude!</h1>
          <h2>The height of the above h1 tag is: {Math.round(height)}</h2>
        </>
      )}
    </>
  );
};

export default AComponent;
