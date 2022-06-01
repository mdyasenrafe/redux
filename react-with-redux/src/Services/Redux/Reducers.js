import * as actionTypes from "./actionTypes";

const intitalState = {
  count: 0,
};

const incrementReduce = (state, action) => {
  return {
    count: state.count + 1,
  };
};

const decrementReduce = (state, action) => {
  return {
    count: state.count - 1,
  };
};

const ResetReduce = (state, action) => {
  return {
    count: 0,
  };
};

export const countReducer = (state = intitalState, action) => {
  switch (action.type) {
    case actionTypes.increment:
      return incrementReduce(state, action);
    case actionTypes.decrement:
      return decrementReduce(state, action);
    case actionTypes.reset:
      return ResetReduce(state, action);
    default:
      return state;
  }
};
