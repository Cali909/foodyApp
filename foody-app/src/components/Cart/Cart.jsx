import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

const Cart = ({ onHideCart }) => {
  const cart = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  const handleFinalOrder = () => {
    //TODO: show feedback and navigate to root and show a receipt
    const orderedFood = [];
    cart.cartMeals.forEach((meal) =>
      orderedFood.push({ name: meal.name, amount: meal.amount })
    );
    console.log(orderedFood);
  };

  return (
    <section className={`${classes.cart} container`}>
      <Modal onHideCart={onHideCart}>
        <ul className={classes["meals__list"]}>
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
          <button className="btn" onClick={handleFinalOrder}>
            Order
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Cart;
