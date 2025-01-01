import React, { useState } from "react";
import styled from "styled-components";

const DynamicBackgroundDiv = styled.div`
  background-color: ${(props) => props.bgColor};
  padding: 20px;
  text-align: center;
`;

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Parent = () => {
  return (
    <DynamicBackground>
      <ExpensiveComponent />
    </DynamicBackground>
  );
};

const DynamicBackground = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const bgColor = getRandomColor();
  return (
    <DynamicBackgroundDiv bgColor={bgColor}>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>➕</button>
      <button onClick={() => setCounter(counter - 1)}>➖</button>
      {children}
    </DynamicBackgroundDiv>
  );
};

export default Parent;

// Component that simulates a slow operation
const ExpensiveComponent = () => {
  const startTime = Date.now();
  let currentTime = startTime;

  while (currentTime - startTime < 1000) currentTime = Date.now();
  return null; // This component renders nothing
};
