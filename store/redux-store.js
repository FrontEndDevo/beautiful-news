import { configureStore } from "@reduxjs/toolkit";
import headlinesNewsSlice from "./headlines-slice";
import everythingNewsSlice from "./everything-slice";

const store = configureStore({
  reducer: {
    headlines: headlinesNewsSlice.reducer,
    everything: everythingNewsSlice.reducer,
  },
});

export default store;
