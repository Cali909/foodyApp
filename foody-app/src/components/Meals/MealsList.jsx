import MealItem from "./MealItem";
import classes from "./MealsList.module.css";
import Card from "./../UI/Card";

const MealsList = ({ meals }) => {
  return (
    <section className="container">
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
