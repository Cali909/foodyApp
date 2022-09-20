import classes from "./HeaderCartButton.module.css";
import CartIcon from "./../Cart/CartIcon";
import { useSelector } from "react-redux";

const HeaderCartButton = ({ onClick }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <button className={`${classes["cart--btn"]} btn`} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{cart.cartMeals.length}</span>
    </button>
  );
};

export default HeaderCartButton;
