const { createStore } = require("redux");

// action type
const increament = "INCREMENT";
const decreament = "DECREMENT";
const reset = "RESET";

const intialState = {
  count: 0,
  loading: false,
};

const increamentCounterAction = () => {
  return {
    type: increament,
  };
};
const decrementCounterAction = () => {
  return {
    type: decreament,
  };
};
const resetCounterAction = () => {
  return {
    type: reset,
  };
};

const counterReducer = (state = intialState, action) => {
  switch (action.type) {
    case increament:
      return {
        ...state,
        count: state.count + 1,
        loading: true,
      };
    case decreament:
      return {
        ...state,
        count: state.count - 1,
        loading: true,
      };
    case reset:
      return {
        ...state,
        count: 0,
      };
    default:
      state;
  }
};

const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
store.dispatch(increamentCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(increamentCounterAction());
store.dispatch(increamentCounterAction());
store.dispatch(decrementCounterAction());
