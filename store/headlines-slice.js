import { createSlice } from "@reduxjs/toolkit";

const initialHeadlinesState = {
  general: {
    articles: [],
    totalResults: 0,
  },
  entertainment: {
    articles: [],
    totalResults: 0,
  },
  business: {
    articles: [],
    totalResults: 0,
  },
  health: {
    articles: [],
    totalResults: 0,
  },
  science: {
    articles: [],
    totalResults: 0,
  },
  sports: {
    articles: [],
    totalResults: 0,
  },
  technology: {
    articles: [],
    totalResults: 0,
  },
};

const headlinesNewsSlice = createSlice({
  name: "headlines-news",
  initialState: initialHeadlinesState,
  reducers: {
    generalStore: (state, action) => {
      state.general.articles = action.payload.news;
      state.general.totalResults = action.payload.total;
    },
    entertainmentStore: (state, action) => {
      state.entertainment.articles = action.payload.news;
      state.entertainment.totalResults = action.payload.total;
    },
    businessStore: (state, action) => {
      state.business.articles = action.payload.news;
      state.business.totalResults = action.payload.total;
    },
    healthStore: (state, action) => {
      state.health.articles = action.payload.news;
      state.health.totalResults = action.payload.total;
    },
    scienceStore: (state, action) => {
      state.science.articles = action.payload.news;
      state.science.totalResults = action.payload.total;
    },
    sportsStore: (state, action) => {
      state.sports.articles = action.payload.news;
      state.sports.totalResults = action.payload.total;
    },
    technologyStore: (state, action) => {
      state.technology.articles = action.payload.news;
      state.technology.totalResults = action.payload.total;
    },
  },
});

export const headlinesActions = headlinesNewsSlice.actions;

export default headlinesNewsSlice;
