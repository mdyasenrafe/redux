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

export const add_food_req = () => {
  return {
    type: actionTypes.add_food_req,
  };
};

export const add_food_success = (payload) => {
  return {
    type: actionTypes.add_food_success,
    payload: payload,
  };
};

export const add_food_fail = (payload) => {
  return {
    type: actionTypes.add_food_fail,
    payload: payload,
  };
};

export const FetchData = () => {
  return (dispatch) => {
    dispatch(getFoodReq());
    axios
      .get("https://radiant-reaches-94589.herokuapp.com/products")
      .then((res) => {
        dispatch(getFoodsuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getFoodFail(err));
      });
  };
};

export const addProduct = (data) => {
  console.log(data);
  return (dispatch) => {
    dispatch(add_food_req());
    console.log(data);
  };
};
