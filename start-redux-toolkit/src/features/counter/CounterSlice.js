import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
  },
});
export const { increament, decrement } = CounterSlice.actions;

export default CounterSlice.reducer;
