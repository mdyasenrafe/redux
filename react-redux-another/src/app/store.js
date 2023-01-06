import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/Product/ProductSlice";

const store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});

export default store;
