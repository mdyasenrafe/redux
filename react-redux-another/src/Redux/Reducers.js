import * as actionTypes from "./ActionTypes";

const intialState = {
  getProduct: { isLoading: false, error: "", Foods: [] },
  addProduct: { isLoading: false, error: "", Foods: [] },
};

const foodReqAction = (state, action) => {
  return {
    ...state,
    getProduct: {
      isLoading: true,
      error: null,
    },
  };
};

const foodSuccessAction = (state, action) => {
  return {
    ...state,
    getProduct: {
      isLoading: false,
      Foods: action.payload,
      error: null,
    },
  };
};

const foodFailAction = (state, action) => {
  return {
    ...state,
    getProduct: {
      isLoading: false,
      Foods: null,
      error: action.payload,
    },
  };
};

const AddFoodReq = (state, action) => {
  return {
    ...state,
    addProduct: {
      isLoading: true,
      error: null,
    },
  };
};

const AddFoodSuccess = (state, action) => {
  return {
    ...state,
    addProduct: {
      isLoading: false,
      Foods: action.payload,
      error: null,
    },
  };
};

const AddFoodFail = (state, action) => {
  return {
    ...state,
    addProduct: {
      isLoading: false,
      Food: null,
      error: action.payload,
    },
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
    case actionTypes.add_food_req:
      return AddFoodReq(state, action);
    case actionTypes.add_food_success:
      return AddFoodSuccess(state, action);
    case actionTypes.add_food_success:
      return AddFoodFail(state, action);
    default:
      return state;
  }
};

export default foodReducers;
