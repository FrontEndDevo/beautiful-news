import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pagesize",
  initialState: 100,
  reducers: {
    setPageSize: (state, action) => action.payload,
    resetPageSize: () => 100,
  },
});

export const { setPageSize, resetPageSize } = pagesSlice.actions; // Export the resetPageSize action
export default pagesSlice.reducer;
