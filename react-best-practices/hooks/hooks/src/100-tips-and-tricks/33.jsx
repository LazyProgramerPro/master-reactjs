import { useReducer, useState } from "react";

const initiState = {};

const reducer = (current, update) => {
  if (update.age > 20) {
    return { ...current, ...update };
  }
  return initiState;
};

const Form = () => {
  const [user, setField] = useReducer(reducer);

  const inputChangeHandler = (event) => {
    const { value, name } = event.target;

    setField({ [name]: value });
  };

  //Form...
};
