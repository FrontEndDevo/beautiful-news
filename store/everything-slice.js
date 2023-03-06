import { createSlice } from "@reduxjs/toolkit";

const initialEverythingState = {
  topic: "",
  totalResults: 0,
  articles: [],
};

const everythingNewsSlice = createSlice({
  name: "everything-news",
  initialState: initialEverythingState,
  reducers: {
    everythingStore: (state, action) => {
      state.topic = action.payload.topic;
      state.articles = action.payload.news;
      state.totalResults = action.payload.total;
    },
  },
});

export const everythingNewsActions = everythingNewsSlice.actions;

export default everythingNewsSlice;
