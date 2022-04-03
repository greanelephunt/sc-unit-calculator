// import React, { useState } from "react";
import classes from "./CartTotal.module.css";

import massIcon from "../../images/ui/mass.png";
import energyIcon from "../../images/ui/energy.png";

const CartTotal = (props) => {
  return (
    <div className={classes.cart_total}>
      <div>
        <div className={classes.cart_total_header}>Total</div>
      </div>
      <div>
        <img src={massIcon} alt="mass cost"/>
        <a>{props.totalMass}</a>
      </div>
      <div>
        <img src={energyIcon} alt="energy cost"/>
        <a>{props.totalEnergy}</a>
      </div>
    </div>
  );
};

export default CartTotal;
