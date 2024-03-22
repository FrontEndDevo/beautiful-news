import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: "en",
  reducers: {
    setLanguage: (state, action) => action.payload,
    resetLanguage: () => "en",
  },
});

export const { setLanguage, resetLanguage } = languageSlice.actions;

export default languageSlice.reducer;
