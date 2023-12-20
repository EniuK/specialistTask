// store.ts
import { configureStore } from "@reduxjs/toolkit";
import specialistsReducer from "./specialistsReducer";

export const store = configureStore({
  reducer: {
    specialists: specialistsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
