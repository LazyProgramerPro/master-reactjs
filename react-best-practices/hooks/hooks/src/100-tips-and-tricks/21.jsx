import { useEffect, useState } from "react";

const Parent = () => {
  const [someState, setSomeState] = useState("");

  const onChange = (isActive) => {
    isActive
      ? setSomeState("You have a coupon!")
      : setSomeState("No coupons :(");
  };

  return (
    <>
      <h1>{someState}</h1>
      <Toggle onChange={onChange} />
    </>
  );
};

const Toggle = ({ onChange }) => {
  const [isActive, setIsActive] = useState(false);

  function updateToggle(nextIsActive) {
    setIsActive(nextIsActive);
    onChange(nextIsActive);
  }

  function clickHandler() {
    setIsActive(!isActive);
  }

  return <div>...</div>;
};

export default Parent;
