import { useState } from "react";

const AComponent = () => {
  const [value, setValue] = useState("");

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default AComponent;
