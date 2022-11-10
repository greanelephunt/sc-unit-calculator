import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import classes from "./Cart.module.css";


const Cart = () => {
  const cart = useSelector(store => store.cart.cart);
  const totalMass = useSelector(store => store.cart.totalMass);
  const totalEnergy = useSelector(store => store.cart.totalEnergy);

  return (
    <div className={classes.cart}>
      {cart.map((item) => {
        return (
          <CartItem
            name={item.name}
            amount={item.amount}
            massCost={item.massCost * item.amount}
            energyCost={item.energyCost * item.amount}
          />
        );
      })}
      <CartTotal totalMass={totalMass} totalEnergy={totalEnergy} />
    </div>
  );
};

export default Cart;
