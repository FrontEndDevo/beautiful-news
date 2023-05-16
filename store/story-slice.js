import { createSlice } from "@reduxjs/toolkit";

const initialStoryState = {
  source: { id: null, name: "" },
  author: "",
  title: "",
  description: "",
  content: "",
  url: "",
  urlToImage: "",
};

const choosenStorySlice = createSlice({
  name: "choosenStory",
  initialState: initialStoryState,
  reducers: {
    setChoosenStory: (state, action) => {
      state = action.payload;
    },
  },
});

export const choosenStoryActions = choosenStorySlice.actions;

export default choosenStorySlice;
