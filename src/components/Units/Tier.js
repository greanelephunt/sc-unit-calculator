import React from "react";
import Type from "./Type";
import classes from "./Tier.module.css";

const Tier = (props) => {
  const landUnits = props.units.land;
  const airUnits = props.units.air;
  const navalUnits = props.units.naval;

  return (
    <React.Fragment>
      <div className={classes.tier_divider}>{props.tier}</div>
      <div className={classes.tier_types}>
        <Type className={classes.wrapper_big} units={landUnits} onCardClick={props.onCardClick}/>
        <Type className={classes.wrapper_small} units={airUnits} onCardClick={props.onCardClick}/>
        <Type className={classes.wrapper_small} units={navalUnits} onCardClick={props.onCardClick}/>
      </div>
    </React.Fragment>
  );
};

export default Tier;
