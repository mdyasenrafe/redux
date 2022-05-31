const { applyMiddleware, createStore, combineReducers } = require("redux");
const { logger } = require("redux-logger");

// type
const get_product = "GET_PRODUCT";
const add_prdocut = "ADD_PRODUCT";
const add_cart = "ADD_CART";
const get_cart = "GET_CART";

const intialProducts = {
  products: ["school management", "amar hotel"],
  count: 2,
};
const intitalCart = {
  carts: ["school management"],
  count: 1,
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

const getCart = () => {
  return {
    type: get_cart,
  };
};
const addCart = (payload) => {
  return {
    type: add_cart,
    payload: payload,
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
      return state;
  }
};

const CartReducer = (state = intitalCart, action) => {
  switch (action.type) {
    case get_cart:
      return {
        ...state,
      };
    case add_cart:
      return {
        ...state,
        carts: [...state.carts, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};
const rootReducers = combineReducers({
  cartR: CartReducer,
  productR: productsReducer,
});

const store = createStore(rootReducers, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getPrdocuts());
store.dispatch(addProduct("e-commerce"));
store.dispatch(getCart());
store.dispatch(addCart("e-commerce"));
