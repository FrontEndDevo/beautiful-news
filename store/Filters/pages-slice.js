import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pages",
  initialState: 100,
  reducers: {
    setPageSize: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setPageSize } = pagesSlice.actions;
export default pagesSlice.reducer;
