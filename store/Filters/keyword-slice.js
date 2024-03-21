import { createSlice } from "@reduxjs/toolkit";

const keywordSlice = createSlice({
  name: "keyword",
  initialState: "google",
  reducers: {
    setSearchedKeyword: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setSearchedKeyword } = keywordSlice.actions;
export default keywordSlice.reducer;
