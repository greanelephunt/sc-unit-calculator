// import React, { useState } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={classes.cart}>
      {props.cartItems.cart.map((item) => {
        return (
          <CartItem
            name={item.name}
            amount={item.amount}
            massCost={item.massCost * item.amount}
            energyCost={item.energyCost * item.amount}
            onClick={props.onCartItemClick}
          />
        );
      })}
      <CartTotal totalMass={props.cartItems.totalMassCost} totalEnergy={props.cartItems.totalEnergyCost} />
    </div>
  );
};

export default Cart;
