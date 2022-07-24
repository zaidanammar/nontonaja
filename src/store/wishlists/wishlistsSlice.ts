import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../core/movie/entities";
import { RootState } from "..";

const initialState: IMovie[] = [];

const wishlistsSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<IMovie>) {
      state.push(action.payload);
    },
  },
});

export const { addToWishlist } = wishlistsSlice.actions;
export const selectWishlist = (state: RootState) => state.wishlists;

export default wishlistsSlice.reducer;
