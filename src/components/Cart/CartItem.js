// import React, { useState } from "react";
import classes from "./CartItem.module.css";

import massIcon from "../../images/ui/mass.png";
import energyIcon from "../../images/ui/energy.png";

const CartItem = (props) => {
  return (
    <div className={classes.cart_item} onClick={props.onClick.bind(null, props.name)}>
      <div>
        <div>{props.name}</div>
        <div>x</div>
        <div>{props.amount}</div>
      </div>
      <div>
        <img src={massIcon} alt="mass cost"/>
        <a>{props.massCost}</a>
      </div>
      <div>
        <img src={energyIcon} alt="energy cost"/>
        <a>{props.energyCost}</a>
      </div>
    </div>
  );
};

export default CartItem;
