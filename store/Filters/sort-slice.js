import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: "publishedAt",
  reducers: {
    setSortOption: (state, action) => action.payload,
    resetSort: () => "publishedAt",
  },
});

export const { setSortOption, resetSort } = sortSlice.actions;

export default sortSlice.reducer;
