import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./GlobalSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { appApi } from "./api/app";

const store = configureStore({
  reducer: {
    global: GlobalSlice,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
