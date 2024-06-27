import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TCounter = {
  count: number;
};

const initialState: TCounter = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increamentByValue: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, increamentByValue } = counterSlice.actions;

export default counterSlice.reducer;
