import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

export const getProducts = createAsyncThunk("products/getProduct", async () => {
  const url = "https://grocery-store-api-y99i.onrender.com/products";
  const res = await axios.get(url);
  return res.data.data;
});

const ProductSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
        state.products = [];
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log("state", action);
        state.isLoading = false;
        state.error = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.products = [];
      });
  },
});

export default ProductSlice.reducer;
