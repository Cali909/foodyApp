import Card from "./../UI/Card";
import classes from "./MealItem.module.css";
import { useSelector, useDispatch } from "react-redux";
// import { cartActions } from "./../../store/index";

const MealItem = (props) => {
  useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleInitialOrder = (mealId) => {
    // const wantedMeal = props;
    // dispatch(cartActions.addToCart(wantedMeal));
    console.log(mealId);
  };

  return (
    <Card>
      <li>
        <div>
          <img className={classes.img} src={props.image} alt={props.name} />
        </div>
        <div className={classes["meal-item"]}>
          <h3 className={classes.name}>{props.name}</h3>
          <h4 className={classes.description}>{props.description}</h4>
          <div className={classes.price}>${props.price}</div>
          <button
            className={`${classes["order--btn"]} btn`}
            onClick={() => handleInitialOrder(props.id)}
          >
            Order
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MealItem;
