import { User } from "@constants/GlobalTypes";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  user: User | null;
};

const state: InitialState = {
  user: null,
};

const globalSlice = createSlice({
  name: "global",
  initialState: state,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = { ...payload.user };
    },
  },
});

export const { setUser } = globalSlice.actions;
export default globalSlice.reducer;
