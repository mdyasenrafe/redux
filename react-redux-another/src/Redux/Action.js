import axios from "axios";
import * as actionTypes from "./ActionTypes";

export const getFoodReq = () => {
  return {
    type: actionTypes.get_food_req,
  };
};

export const getFoodsuccess = (payload) => {
  return {
    type: actionTypes.get_food_success,
    payload: payload,
  };
};

export const getFoodFail = (payload) => {
  return {
    type: actionTypes.get_food_fail,
    payload: payload,
  };
};

const FetchData = () => {
  return (dispatch) => {
    dispatch(getFoodReq());
    axios
      .get("https://radiant-reaches-94589.herokuapp.com/products")
      .then((res) => {
        console.log(res);
        dispatch(getFoodsuccess(res));
      })
      .catch((err) => {
        dispatch(getFoodFail(err));
      });
  };
};
