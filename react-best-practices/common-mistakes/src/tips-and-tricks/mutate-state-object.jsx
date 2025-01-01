import { useState } from "react";

const AComponent = () => {
  const [value, setValue] = useState({ id: "", data: "" });

  const changeHandler = (nextVal) => {
    const nextValue = { ...value, data: nextVal };
    setValue(nextValue);
  };

  console.log("rendered");

  return (
    <>
      <input
        value={value.data}
        onChange={(e) => changeHandler(e.target.value)}
      />
    </>
  );
};

export default AComponent;
