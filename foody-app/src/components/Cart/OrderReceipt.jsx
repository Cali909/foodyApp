import classes from "./OrderReceipt.module.css";
import Modal from "./../UI/Modal";
import { useSelector } from "react-redux";

const OrderReceipt = ({ onHideReceipt }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <Modal>
      <ul className={classes.receipt}>
        {cart.cartMeals.map((meal) => (
          <li className={classes.item} key={meal.id}>
            <div>
              <span className={classes["item__amount"]}>{meal.amount}</span>
              <span> x {meal.name}</span>
            </div>
            <div>${meal.amount * meal.price}</div>
          </li>
        ))}
      </ul>
      <button
        className={`${classes["receipt__btn"]} btn`}
        onClick={onHideReceipt}
      >
        OK
      </button>
      <p className={classes["receipt__serial"]}>
        Receipt Serial: {(Math.random() * 100000).toFixed(0)}
      </p>
    </Modal>
  );
};

export default OrderReceipt;
