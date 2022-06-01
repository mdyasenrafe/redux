import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import foodReducers from "./Redux/Reducers";

const foodStore = createStore(foodReducers, applyMiddleware(thunk));

export default foodStore;
