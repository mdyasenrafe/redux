import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increamentByValue,
  increment,
} from "./redux/features/counterSlice";
import { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex w-full justify-center">
        <button
          className="px-3 py-3 bg-red-500 rounded-md text-xl font-semibold text-white"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h1 className="text-3xl mx-3">{count}</h1>
        <button
          className="px-3 py-3 bg-green-500 rounded-md text-xl font-semibold text-white"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="px-3 py-3 bg-green-500 rounded-md text-xl font-semibold text-white ml-3"
          onClick={() => dispatch(increamentByValue(5))}
        >
          Increment By Value
        </button>
      </div>
    </div>
  );
}

export default App;
