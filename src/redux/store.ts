import { configureStore, EnhancedStore } from "@reduxjs/toolkit";

const store: EnhancedStore = configureStore({
  reducer: {}
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
