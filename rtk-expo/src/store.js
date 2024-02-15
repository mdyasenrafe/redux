import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/theme";
import reactotron from "./reactotron";
import { api } from "./api/api";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
  enhancers: (getDefaultEnhancers) => {
    return getDefaultEnhancers().concat(reactotron.createEnhancer());
  },
});
