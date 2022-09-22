import MealItem from "./MealItem";
import classes from "./MealsList.module.css";
import Card from "./../UI/Card";

const MealsList = ({ meals, onMealFilter }) => {
  /* TODO: set b.g color on selection */

  return (
    <section className="container">
      <div className={classes.types}>
        <ul className={classes["type__list"]}>
          <li
            className={classes["type__item"]}
            onClick={() => onMealFilter("all")}
          >
            All Meals
          </li>
          <li
            className={classes["type__item"]}
            onClick={() => onMealFilter("rice")}
          >
            Rice
          </li>
          <li
            className={classes["type__item"]}
            onClick={() => onMealFilter("pasta")}
          >
            Pasta
          </li>
          <li
            className={classes["type__item"]}
            onClick={() => onMealFilter("chicken")}
          >
            Chicken
          </li>
          <li
            className={classes["type__item"]}
            onClick={() => onMealFilter("meat")}
          >
            Meat
          </li>
          <li
            className={classes["type__item"]}
            onClick={() => onMealFilter("dessert")}
          >
            Dessert
          </li>
        </ul>
      </div>
      <Card>
        <ul className={`${classes["meals-list"]} grid`}>
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              image={meal.image}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default MealsList;
