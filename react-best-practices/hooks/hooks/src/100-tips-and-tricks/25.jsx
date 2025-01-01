import React, { useCallback } from "react";

const AComponent = () => {
  const clickHandler = () => {
    // Handle the click event here...
  };

  return <Button onClick={clickHandler} />;
};

const Button = ({ onClick }) => {
  return <button onClick={onClick}>Click me</button>;
};

const ExpensiveComponent = React.memo(({ onClick }) => {
  //😰 lots of complex code and logic...
});
