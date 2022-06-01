import * as actionTypes from "./ActionTypes";

const intialState = {
  isLoading: false,
  error: "",
  Foods: [],
};

const foodReqAction = (state, action) => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};

const foodSuccessAction = (state, action) => {
  return {
    ...state,
    isLoading: false,
    Foods: action.payload,
    error: null,
  };
};

const foodFailAction = (state, action) => {
  return {
    ...state,
    isLoading: false,
    Foods: null,
    error: action.payload,
  };
};

const foodReducers = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.get_food_req:
      return foodReqAction(state, action);
    case actionTypes.get_food_success:
      return foodSuccessAction(state, action);
    case actionTypes.get_food_fail:
      return foodFailAction(state, action);
    default:
      return state;
  }
};

export default foodReducers;
