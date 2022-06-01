import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction } from "../Services/Redux/actions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementAction());
  };
  const handleDecrease = () => {
    dispatch(decrementAction());
  };

  return (
    <div className="counter-area">
      <h1>Counter App</h1>
      <h3>{count}</h3>
      <div className="main">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
