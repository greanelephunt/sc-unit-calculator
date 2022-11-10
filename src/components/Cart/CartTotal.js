// import React, { useState } from "react";
import classes from "./CartTotal.module.css";

import massIcon from "../../images/ui/mass.png";
import energyIcon from "../../images/ui/energy.png";

const CartTotal = ({totalMass, totalEnergy}) => {
  return (
    <div className={classes.cart_total}>
      <div>
        <div className={classes.cart_total_header}>Total</div>
      </div>
      <div>
        <img src={massIcon} alt="mass cost"/>
        <a>{totalMass}</a>
      </div>
      <div>
        <img src={energyIcon} alt="energy cost"/>
        <a>{totalEnergy}</a>
      </div>
    </div>
  );
};

export default CartTotal;
