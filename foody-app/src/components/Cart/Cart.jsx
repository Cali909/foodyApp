import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const cartItems = [
  { id: "1", name: "hey", amount: 3 },
  { id: "2", name: "me", amount: 5 },
];

const Cart = () => {
  return (
    <section className={`${classes.cart} container`}>
      <Modal>
        <ul>
          {cartItems.map((meal) => (
            <CartItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              amount={meal.amount}
              // description={meal.description}
              // price={meal.price}
              // image={meal.image}
            />
          ))}
        </ul>
        <div className={classes["total-price"]}>Total Price: $43</div>
        <div className={classes.actions}>
          <button className="btn">Close</button>
          <button className="btn">Order</button>
        </div>
      </Modal>
    </section>
  );
};

export default Cart;
