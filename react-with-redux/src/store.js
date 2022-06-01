import { createStore } from "redux";
import { countReducer } from "./Services/Redux/Reducers";

const store = createStore(countReducer);

export default store;
