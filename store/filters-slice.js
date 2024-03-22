import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    keyword: "google",
    sortBy: "publishedAt",
    language: "en",
    pageSize: 100,
  },
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    resetFilters: (state) => {
      state.keyword = "google";
      state.language = "en";
      state.pageSize = 100;
      state.sortBy = "publishedAt";
    },
  },
});

export const { setKeyword, setSortBy, setLanguage, setPageSize, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
