import { configureStore } from "@reduxjs/toolkit";
import headlinesNewsSlice from "./headlines-slice";
import everythingNewsSlice from "./everything-slice";
import searchBarSlice from "./search-bar-slice";

const store = configureStore({
  reducer: {
    headlines: headlinesNewsSlice.reducer,
    everything: everythingNewsSlice.reducer,
    search: searchBarSlice.reducer,
  },
});

export default store;
