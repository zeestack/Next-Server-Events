import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";

function initStore() {
  const store = configureStore({
    reducer: userReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }).concat([]),
  });

  return store;
}

const store = initStore();

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { initStore, store };
export type { RootState, AppDispatch };
