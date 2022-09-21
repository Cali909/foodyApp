import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./../../store/index";

const CartItem = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDecreaseAmount = (mealId) => {
    const wantedMeal = cart.meals.find((meal) => meal.id === mealId);
    dispatch(cartActions.decreaseAmount(wantedMeal));
  };

  const handleIncreaseAmount = (mealId) => {
    const wantedMeal = cart.meals.find((meal) => meal.id === mealId);
    dispatch(cartActions.increaseAmount(wantedMeal));
  };

  return (
    <li className={classes.content}>
      <div className={classes["item__name"]}>{props.name}</div>
      <div className={classes["item__amount"]}>x {props.amount}</div>
      {/* <div className={classes["item__price"]}>{props.price} per serving</div> */}
      <div className={classes.actions}>
        <button
          className={`btn`}
          onClick={() => handleDecreaseAmount(props.id)}
        >
          -
        </button>
        <button
          className={`btn`}
          onClick={() => handleIncreaseAmount(props.id)}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
