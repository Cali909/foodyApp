import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li>
      <div className={classes.item}>
        <div className={classes.content}>
          <div className={classes["item__name"]}>{props.name}</div>
          <div className={classes["item__amount"]}>x {props.amount}</div>
        </div>
        <div className={classes.actions}>
          <button className={`btn`}>-</button>
          <button className={`btn`}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
