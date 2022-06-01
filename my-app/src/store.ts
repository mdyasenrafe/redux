import { createStore } from "redux";
import reducer from "./Redux/Reducer";

const IncrementStore = createStore(reducer);

export default IncrementStore;
