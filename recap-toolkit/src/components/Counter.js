import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Counter.module.css";
import { decrement, increment } from "../features/counter/counterSlice";

export function Counter() {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <div className={styles.row}>
        <button
          onClick={() => dispatch(decrement(1))}
          className={styles.button}
          aria-label="Decrement value"
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          onClick={() => dispatch(increment(1))}
          className={styles.button}
          aria-label="Increment value"
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button}>Add Amount</button>
        <button
          onClick={() => dispatch(increment(2))}
          className={styles.asyncButton}
        >
          Add Async
        </button>
        <button
          onClick={() => dispatch(increment(3))}
          className={styles.button}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
