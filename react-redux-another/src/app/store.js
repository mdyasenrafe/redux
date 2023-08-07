import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../api/ProductApiSlice";

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    // product: ProductSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
