import classes from "./UnitCard.module.css";

import massIcon from "../../images/ui/mass.png";
import energyIcon from "../../images/ui/energy.png";
import hpIcon from "../../images/ui/hp.png";

const UnitCard = (props) => {
  
  const toNumber = (value) => {
    let newValue = "" + value
    if (newValue.indexOf("k") > 0) {
      newValue = newValue.replace("k", "");
      newValue *= 1000;
    }
    return newValue;
  };

  const onClickHandler = () => {
    const pickedItem = {
      name: props.name,
      massCost: toNumber(props.massCost),
      energyCost: toNumber(props.energyCost),
    };
    props.onClick(pickedItem);
  };

  return (
    <div className={classes.card} onClick={onClickHandler}>
      <div className={classes.card_header}>{props.name}</div>
      <div className={classes.card_info}>
        <div className={classes.card_unit_image}>
          <img src={`${process.env.PUBLIC_URL}${props.img}`} alt="icon"/>
        </div>
        <div className={classes.card_stats}>
          <div className={classes.price}>
            <img src={massIcon} alt="mass cost"/>
            <div>{props.massCost}</div>
          </div>
          <div className={classes.price}>
            <img src={energyIcon} alt="energy cost"/>
            <div>{props.energyCost}</div>
          </div>
          <div>
            <img src={hpIcon} alt="hp"/>
            <div>{props.hp}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitCard;
