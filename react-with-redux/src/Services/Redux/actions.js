import * as actionTypes from "./actionTypes";

export const incrementAction = () => {
  return {
    type: actionTypes.increment,
  };
};

export const decrementAction = () => {
  return {
    type: actionTypes.decrement,
  };
};

export const resetAction = () => {
  return {
    type: actionTypes.reset,
  };
};
