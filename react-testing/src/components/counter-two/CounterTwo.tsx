import React from "react";
import { CounterTwoProps } from "./counterTwoProps.types";
const CounterTwo = ({
  count,
  handleIncrement,
  handleDecrement,
  reset,
}: CounterTwoProps) => {
  return (
    <div>
      <h1>CounterTwo</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
      {reset && <button onClick={reset}>reset</button>}
    </div>
  );
};

export default CounterTwo;
