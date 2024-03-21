import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pagesize",
  initialState: 100,
  reducers: {
    setPageSize: (state, action) => action.payload,
  },
});

export const { setPageSize } = pagesSlice.actions;
export default pagesSlice.reducer;
