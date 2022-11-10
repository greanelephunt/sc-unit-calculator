import { useSelector } from "react-redux";
import Factions from "../Factions/Factions";
import Tier from "../Units/Tier";
import classes from "./Goods.module.css";

const Goods = () => {
  const units = useSelector(store => store.faction.units)

  return (
    <div className={classes.goods}>
      <Factions/>
      <Tier tier="T1" units={units.tier1}/>
      <Tier tier="T2" units={units.tier2}/>
      <Tier tier="T3" units={units.tier3}/>
      <Tier tier="Experimental" units={units.experimental}/>
    </div>
  );
};

export default Goods;
