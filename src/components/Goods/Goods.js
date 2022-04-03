import Factions from "../Factions/Factions";
import Tier from "../Units/Tier";
import classes from "./Goods.module.css";

const Goods = (props) => {
  const t1Units = props.units.tier1;
  const t2Units = props.units.tier2;
  const t3Units = props.units.tier3;
  const t4Units = props.units.experimental;

  return (
    <div className={classes.goods}>
      <Factions onFactionChange={props.onFactionChange}/>
      <Tier tier="T1" units={t1Units} onCardClick={props.onCardClick}/>
      <Tier tier="T2" units={t2Units} onCardClick={props.onCardClick}/>
      <Tier tier="T3" units={t3Units} onCardClick={props.onCardClick}/>
      <Tier tier="Experimental" units={t4Units} onCardClick={props.onCardClick}/>
    </div>
  );
};

export default Goods;
