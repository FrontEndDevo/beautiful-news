import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import headlinesNewsSlice from "./headlines-slice";
import everythingNewsSlice from "./everything-slice";
import searchBarSlice from "./search-bar-slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import choosenStorySlice from "./story-slice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  headlines: headlinesNewsSlice.reducer,
  everything: everythingNewsSlice.reducer,
  search: searchBarSlice.reducer,
  story: choosenStorySlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

export default store;
