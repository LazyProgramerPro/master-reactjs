import { useState } from "react";

const useArray = (initialState = []) => {
  const [state, setState] = useState(initialState);

  const add = (newValue) => {
    setState((currentState) => [...currentState, newValue]);
  };

  const remove = (index) => {
    setState((currentState) => {
      const newState = [...currentState];
      newState.splice(index, 1);
      return newState;
    });
  };

  return [state, { add, remove }];
};

const TaskList = () => {
  const [tasks, { add, remove }] = useArray();
  return <ul>{/* display some tasks */}</ul>;
};

export default TaskList;
