import { useState } from "react";

const RootComponent = () => {
  return (
    <>
      <Form />
      <ExpensiveComponent />
    </>
  );
};

const Form = () => {
  const [name, setName] = useState("");
  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </form>
  );
};

const ExpensiveComponent = () => {
  //a component that holds a lot of other components and stuff.
};

export default RootComponent;
