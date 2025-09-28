import { createSlice } from "@reduxjs/toolkit";

export const filterButtons = createSlice({
  name: "buttons",
  initialState: [],
  reducers: {
    toggleBtn: (state, action) => {
      if (state.includes(action.payload)) {
        return state.filter((item) => item !== action.payload);
      } else {
        state.push(action.payload);
      }
    },
    clearBtns: () => [],
  },
});

export const { toggleBtn, clearBtns } = filterButtons.actions;
export default filterButtons.reducer;
