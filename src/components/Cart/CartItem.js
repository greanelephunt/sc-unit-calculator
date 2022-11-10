import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./CartItem.module.css";

import massIcon from "../../images/ui/mass.png";
import energyIcon from "../../images/ui/energy.png";

const CartItem = ({name, amount, massCost, energyCost}) => {
  const dispatch = useDispatch();

  const cartItemClickHandler = () => {
    dispatch(cartActions.removeItem(name));
  }

  return (
    <div className={classes.cart_item} onClick={cartItemClickHandler}>
      <div>
        <div>{name}</div>
        <div>x</div>
        <div>{amount}</div>
      </div>
      <div>
        <img src={massIcon} alt="mass cost"/>
        <a>{massCost}</a>
      </div>
      <div>
        <img src={energyIcon} alt="energy cost"/>
        <a>{energyCost}</a>
      </div>
    </div>
  );
};

export default CartItem;
