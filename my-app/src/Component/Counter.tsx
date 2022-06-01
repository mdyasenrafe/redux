import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction } from "../Redux/Action";

const Counter = () => {
  const { count } = useSelector((state: any) => state);
  const dispatch: any = useDispatch();

  const handleIncrement = (): void => {
    dispatch(incrementAction());
  };
  const handleDecrement = (): void => {
    dispatch(decrementAction());
  };

  return (
    <div className="counter-area">
      <h1>Counter App</h1>
      <h3>{count}</h3>
      <div className="main">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
