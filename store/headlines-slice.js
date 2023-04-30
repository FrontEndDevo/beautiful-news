import { createSlice } from "@reduxjs/toolkit";

const initialHeadlinesState = {
  headlines: [
    {
      category: "general",
      articles: [],
      totalResults: 0,
    },
  ],
};

const headlinesNewsSlice = createSlice({
  name: "headlines-news",
  initialState: initialHeadlinesState,
  reducers: {
    headlineStore: (state, action) => {
      // Prepare the new headline object (category & articles & totalResults):
      const newHeadlineObj = {
        category: action.payload.category,
        articles: action.payload.news,
        totalResults: action.payload.total,
      };

      // Detect if the coming headline is already exist in headlines array or not
      const isCategoryExist = state.headlines.find(
        (obj) => obj.category == action.payload.category
      );

      // Get the index of headline we have in our array:
      const existingHeadlineIndex = state.headlines.indexOf(
        (obj) => obj.category == action.payload.category
      );

      // Start replacing existing headline with the new:
      if (isCategoryExist) {
        state.headlines = state.headlines.filter(
          (item) => item.category !== action.payload.category
        );

        state.headlines.push(newHeadlineObj);
      } else {
        // Or push the new headline to our headlines array.
        state.headlines.push(newHeadlineObj);
      }
    },
  },
});

export const headlinesActions = headlinesNewsSlice.actions;

export default headlinesNewsSlice;
