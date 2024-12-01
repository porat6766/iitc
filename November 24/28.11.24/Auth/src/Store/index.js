import { configureStore } from "@reduxjs/toolkit";

import userReduser from "./slices/userSlice.js";

const store = configureStore({
  reducer: {
    user: userReduser,
  },
});

export default store;
