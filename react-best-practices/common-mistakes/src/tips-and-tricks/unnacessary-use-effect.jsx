import { useState } from "react";

const AComponent = () => {
  const [value, setValue] = useState("");

  const chars = value.length;

  console.log("rendered");

  return (
    <>
      <h3>Char count: {chars}</h3>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
};

export default AComponent;
