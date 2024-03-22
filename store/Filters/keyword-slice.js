import { createSlice } from "@reduxjs/toolkit";

const keywordSlice = createSlice({
  name: "keyword",
  initialState: "google",
  reducers: {
    setSearchedKeyword: (state, action) =>
      action.payload == "" ? state : action.payload,
    resetKeyword: () => "google",
  },
});

export const { setSearchedKeyword, resetKeyword } = keywordSlice.actions;

export default keywordSlice.reducer;
