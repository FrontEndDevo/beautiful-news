import { createSlice } from "@reduxjs/toolkit";

const initialSearchBar = { searchedKeyword: "" };

const searchBarSlice = createSlice({
  name: "search-bar",
  initialState: initialSearchBar,
  reducers: {
    getKeyword: (state, action) => {
      state.searchedKeyword = action.payload.keyword;
    },
  },
});

export const searchActions = searchBarSlice.actions;

export default searchBarSlice;
