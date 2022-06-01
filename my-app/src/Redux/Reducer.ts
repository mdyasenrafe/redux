import * as actionTypes from "./ActionTypes";

interface IState {
  count: number | 0;
}

const initialState: IState = {
  count: 0,
};

const incrementReducer = (state: IState, action: any) => {
  return {
    ...state,
    count: state.count + 1,
  };
};

const reducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.increment:
      return incrementReducer(state, action);
    default:
      return state;
  }
};

export default reducer;
