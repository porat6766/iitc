import { createSlice } from "@reduxjs/toolkit";

const userReduser = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userReduser.actions;
export default userReduser.reducer;
