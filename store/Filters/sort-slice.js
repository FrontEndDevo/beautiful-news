import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: "publishedAt",
  reducers: {
    setSortOption: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setSortOption } = sortSlice.actions;

export default sortSlice.reducer;
