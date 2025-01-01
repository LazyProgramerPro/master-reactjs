import { useEffect, useRef, useState } from "react";

// Define the hook with a generic type T
export function usePrevious<T>(value: T): T | undefined {
  // useRef to store the previous value
  const ref = useRef<T>();

  // useEffect to update the ref with the current value after render
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return the previous value
  return ref.current;
}

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Use the custom hook to get the previous count value
  const previousCount = usePrevious(count);

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {previousCount}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
