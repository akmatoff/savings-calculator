import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import calcSlice from "./calcSlice";

const store: EnhancedStore = configureStore({
  reducer: {
    calc: calcSlice
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
