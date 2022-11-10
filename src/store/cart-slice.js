import { createSlice } from "@reduxjs/toolkit";

//{cart: [{name: "", massCost:99, energyCost:99, amount:10},{...},{...},...], totalMass: 0, totalEnergy: 0}
const initialState = { cart: [], totalMass: 0, totalEnergy: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(store, action) {
      store.totalMass += action.payload.massCost;
      store.totalEnergy += action.payload.energyCost;

      const existingCartItemIndex = store.cart.findIndex(
        (item) => item.name === action.payload.name
      );
      const existingCartItem = store.cart[existingCartItemIndex];

      if (existingCartItem) {
        existingCartItem.amount++;
      } else {
        store.cart.push({
          name: action.payload.name,
          massCost: action.payload.massCost,
          energyCost: action.payload.energyCost,
          amount: 1,
        });
      }
    },
    removeItem(store, action) {
        const existingCartItemIndex = store.cart.findIndex(
            (item) => item.name === action.payload
          );
        const existingCartItem = store.cart[existingCartItemIndex];
        
        existingCartItem.amount--;
        store.totalMass -= existingCartItem.massCost;
        store.totalEnergy -= existingCartItem.energyCost;

        if(existingCartItem.amount === 0) {
            store.cart = store.cart.filter((item) => item.name !== action.payload);
        }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
