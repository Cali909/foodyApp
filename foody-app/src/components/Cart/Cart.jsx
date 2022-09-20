import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = ({ onHideCart }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <section className={`${classes.cart} container`}>
      <Modal onHideCart={onHideCart}>
        <ul>
          {cart.cartMeals.map((meal) => (
            <CartItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              amount={meal.amount}
              price={meal.price}
            />
          ))}
        </ul>
        <div
          className={classes["total-price"]}
        >{`Total Price: $${cart.totalAmount}`}</div>
        <div className={classes.actions}>
          <button className="btn" onClick={onHideCart}>
            Close
          </button>
          <button className="btn">Order</button>
        </div>
      </Modal>
    </section>
  );
};

export default Cart;
