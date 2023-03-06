import { createSlice } from "@reduxjs/toolkit";

const initialHeadlinesState = {
  headline: {
    category: "general",
    articles: [],
    totalResults: 0,
  },
};

const headlinesNewsSlice = createSlice({
  name: "headlines-news",
  initialState: initialHeadlinesState,
  reducers: {
    headlineStore: (state, action) => {
      state.headline.category = action.payload.category;
      state.headline.articles = action.payload.news;
      state.headline.totalResults = action.payload.total;
    },
  },
});

export const headlinesActions = headlinesNewsSlice.actions;

export default headlinesNewsSlice;
