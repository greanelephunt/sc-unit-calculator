import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import factionSlice from "./faction-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    faction: factionSlice.reducer
  },
});

export default store;
