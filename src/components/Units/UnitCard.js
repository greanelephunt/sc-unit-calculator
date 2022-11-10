import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./UnitCard.module.css";

import massIcon from "../../images/ui/mass.png";
import energyIcon from "../../images/ui/energy.png";
import hpIcon from "../../images/ui/hp.png";

const UnitCard = ({name, img, massCost, energyCost, hp}) => {
  const dispatch = useDispatch();
  
  const unitCardClickHandler = () => {
    dispatch(cartActions.addItem({name, massCost, energyCost}))
  };

  return (
    <div className={classes.card} onClick={unitCardClickHandler}>
      <div className={classes.card_header}>{name}</div>
      <div className={classes.card_info}>
        <div className={classes.card_unit_image}>
          <img src={`${process.env.PUBLIC_URL}${img}`} alt="icon"/>
        </div>
        <div className={classes.card_stats}>
          <div className={classes.price}>
            <img src={massIcon} alt="mass cost"/>
            <div>{massCost}</div>
          </div>
          <div className={classes.price}>
            <img src={energyIcon} alt="energy cost"/>
            <div>{energyCost}</div>
          </div>
          <div>
            <img src={hpIcon} alt="hp"/>
            <div>{hp}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitCard;
