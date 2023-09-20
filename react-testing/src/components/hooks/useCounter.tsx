import { useState } from "react";
import { useCounterProps } from "./useCounter.type";

export const useCounter = ({ initialCount }: useCounterProps) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
};
