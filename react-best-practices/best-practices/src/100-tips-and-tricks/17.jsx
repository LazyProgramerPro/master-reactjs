import { useState } from "react";

const AComponent = () => {
  const [key, setKey] = useState(0);

  function resetState() {
    setKey(Math.random());
  }

  return (
    <>
      <input type="text" key={key} />
      <button onClick={resetState}>Reset state</button>
    </>
  );
};

export default AComponent;
