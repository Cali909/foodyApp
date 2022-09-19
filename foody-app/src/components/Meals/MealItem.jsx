import Card from "./../UI/Card";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
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
          <button className={`${classes["order--btn"]} btn`}>Order</button>
        </div>
      </li>
    </Card>
  );
};

export default MealItem;
