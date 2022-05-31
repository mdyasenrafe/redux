const { createStore } = require("redux");

// type
const get_product = "GET_PRODUCT";
const add_prdocut = "ADD_PRODUCT";

const intialProducts = {
  products: ["school management", "amar hotel"],
  count: 2,
};

const getPrdocuts = () => {
  return {
    type: get_product,
  };
};
const addProduct = (product) => {
  return {
    type: add_prdocut,
    payload: product,
  };
};
// reduxers
const productsReducer = (state = intialProducts, action) => {
  switch (action.type) {
    case get_product:
      return {
        ...state,
      };
    case add_prdocut:
      return {
        ...state,
        products: [...state.products, action.payload],
        count: state.count + 1,
      };
    default:
      state;
  }
};

const store = createStore(productsReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getPrdocuts());
