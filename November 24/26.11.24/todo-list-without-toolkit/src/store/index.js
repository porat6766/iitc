import { configureStore } from "@reduxjs/toolkit";
import toDosSlice from "./slices/toDosSlices.js";

export const store = configureStore({
  reducer: {
    toDos: toDosSlice,
  },
});
