import classes from "./HeaderCartButton.module.css";
import CartIcon from "./../Cart/CartIcon";
import { useSelector } from "react-redux";

const HeaderCartButton = () => {
  const foodVariety = useSelector((state) => state.cart.foodVariety);

  return (
    <button className={`${classes["cart--btn"]} btn`}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{foodVariety}</span>
    </button>
  );
};

export default HeaderCartButton;
