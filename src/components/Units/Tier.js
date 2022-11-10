import React from "react";
import Type from "./Type";
import classes from "./Tier.module.css";

const Tier = ({tier, units}) => {
  const landUnits = units.land;
  const airUnits = units.air;
  const navalUnits = units.naval;

  return (
    <React.Fragment>
      <div className={classes.tier_divider}>{tier}</div>
      <div className={classes.tier_types}>
        <Type className={classes.wrapper_big} units={landUnits}/>
        <Type className={classes.wrapper_small} units={airUnits}/>
        <Type className={classes.wrapper_small} units={navalUnits}/>
      </div>
    </React.Fragment>
  );
};

export default Tier;
