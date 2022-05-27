const { createStore } = require("redux");

// action type
const increament = "INCREMENT";
const decreament = "DECREMENT";
const increamentByValue = "INCREAMENT_BY_VALUE";
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

const increamentByValueAction = (value) => {
  return {
    type: increamentByValue,
    data: value,
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
    case increamentByValue:
      return {
        ...state,
        count: state.count + action.data,
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
// store.dispatch(increamentCounterAction());
// store.dispatch(resetCounterAction());
// store.dispatch(increamentCounterAction());
// store.dispatch(increamentCounterAction());
// store.dispatch(decrementCounterAction());
store.dispatch(increamentByValueAction(5));
store.dispatch(increamentByValueAction(20));
