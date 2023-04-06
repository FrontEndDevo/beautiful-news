import { createSlice } from "@reduxjs/toolkit";

const initialEverythingState = {
  topic: "",
  totalResults: 0,
  articles: [
    {
      title: "",
      author: "",
      content: "",
      description: "",
      urlToImage: "",
      url: "",
      source: { id: 0, name: "" },
    },
  ],
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
