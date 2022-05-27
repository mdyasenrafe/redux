const { createStore } = require("redux");

const increament = "INCREMENT";
const decreament = "DECREMENT";
const ADD_USER = "ADDUSER";
// 1.1
// 1. state
// 2. dispatch action
// 3. reducer(based on action type)
// 4. update

// state
const intitalCounterState = {
  count: 0,
  loading: false,
};

const users = {
  users: [{ name: "rafi" }],
};
// action is a object with type and payload
const incrementConterAction = () => {
  return {
    type: increament,
  };
};

const decrementCounterAction = () => {
  return {
    type: decreament,
  };
};

const addUserAction = () => {
  return {
    type: ADD_USER,
    payload: {
      name: "rafe 4",
    },
  };
};

// reducer
const counterReducer = (state = intitalCounterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
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
store.dispatch(incrementConterAction());
// store.dispatch(decrementCounterAction());

// plan
