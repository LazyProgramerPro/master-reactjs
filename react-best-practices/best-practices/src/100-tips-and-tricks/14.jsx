import { useState } from "react";

const AComponent = () => {
  const [status, setStatus] = useState("empty"); // 'typing'

  const isEmpty = status === "empty";
  const isTyping = status === "typing";

  // lots of logic here...
};
