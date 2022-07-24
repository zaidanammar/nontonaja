import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import wishlistsReducer from "./wishlists/wishlistsSlice";

const store = configureStore({
  reducer: {
    wishlists: wishlistsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
