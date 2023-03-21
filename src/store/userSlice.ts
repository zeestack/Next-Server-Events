import {
  PayloadAction,
  createSelector,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";

import { RootState } from "./configureStore";

export type User = {
  id: string;
  name: string;
  email: string;
};

type UserSlice = {
  list: User[];
  loading: boolean;
  lastFetch: number | null;
};

const initialState: UserSlice = {
  list: [],
  loading: false,
  lastFetch: null,
};

const slice = createSlice({
  name: "userSlice",
  initialState,

  reducers: {
    addOrUpdate: (state, action: PayloadAction<User>) => {
      const index = state.list.findIndex((i) => i.id === action.payload.id);
      if (index === -1) {
        state.list.push(action.payload);
      } else {
        state.list[index] = action.payload;
      }
    },

    setUserSlice: (state, action: PayloadAction<UserSlice>) => {
      state = action.payload;
    },
  },
});

export const userReducer = slice.reducer;
export const { addOrUpdate, setUserSlice } = slice.actions;

export default slice.reducer;
