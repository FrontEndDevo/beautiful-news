import { createSlice } from "@reduxjs/toolkit";

const initialSearchBar = { searchedKeyword: "" };

const searchBarSlice = createSlice({
  name: "search-bar",
  initialState: initialSearchBar,
  reducers: {
    getKeyword: (state, action) => {
      // Maybe we store something else in the future, so we are gonna pass an object with (keyword) property.
      state.searchedKeyword = action.payload.keyword;
    },
  },
});

export const searchActions = searchBarSlice.actions;

export default searchBarSlice;
