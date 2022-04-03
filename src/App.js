import React, { useState, useReducer } from "react";
import classes from "./App.module.css";
import Goods from "./components/Goods/Goods";
import Cart from "./components/Cart/Cart";

import uefUnits from "./data/uef.json";
import cybranUnits from "./data/cybran.json";

const defaultCartState = { cart: [], totalMassCost: 0, totalEnergyCost: 0 };

const cartReducer = (state, action) => {
  let updatedCart;
  let updatedTotalMass;
  let updatedTotalEnergy;

  if (action.type === "ADD") {
    updatedTotalMass = state.totalMassCost + +action.item.massCost;
    updatedTotalEnergy = state.totalEnergyCost + +action.item.energyCost;
    const existingCartItemIndex = state.cart.findIndex(
      (item) => item.name === action.item.name
    );
    const existingCartItem = state.cart[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount + 1};
      updatedCart = [...state.cart];
      updatedCart[existingCartItemIndex] = updatedItem;
    } else {
      updatedCart = state.cart.concat({ ...action.item, amount: 1 });
    }
    
  } else if (action.type === "REMOVE") {
    const existingCartItemIndex = state.cart.findIndex(
      (item) => item.name === action.name
    );
    const existingCartItem = state.cart[existingCartItemIndex];

    updatedTotalMass = state.totalMassCost - existingCartItem.massCost * existingCartItem.amount;
    updatedTotalEnergy = state.totalEnergyCost - existingCartItem.energyCost * existingCartItem.amount;
    updatedCart = state.cart.filter((item) => item.name !== action.name);
  }

  return {
    cart: updatedCart,
    totalMassCost: updatedTotalMass,
    totalEnergyCost: updatedTotalEnergy,
  };
};

function App() {
  const [units, setUnits] = useState(uefUnits);
  const [cart, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const factionChangeHandler = (faction) => {
    if (faction === "cybran") setUnits(cybranUnits);
    else if (faction === "uef") setUnits(uefUnits);
  };

  const cardClickHandler = (newItem) => {
    dispatchCart({ type: "ADD", item: newItem });
  };

  const cartItemClickHandler = (name) => {
    dispatchCart({ type: "REMOVE", name: name });
  };

  return (
    <div className={classes.wrapper}>
      <Goods
        units={units}
        onFactionChange={factionChangeHandler}
        onCardClick={cardClickHandler}
      />
      <Cart cartItems={cart} onCartItemClick={cartItemClickHandler}/>
    </div>
  );
}

export default App;
