import classes from "./App.module.css";
import Goods from "./components/Goods/Goods";
import Cart from "./components/Cart/Cart";

function App() {

  return (
    <div className={classes.wrapper}>
      <Goods/>
      <Cart />
    </div>
  );
}

export default App;
