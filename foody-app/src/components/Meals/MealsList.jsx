import MealItem from "./MealItem";
import classes from "./MealsList.module.css";
import Card from "./../UI/Card";
import { useState, useRef } from "react";

const MealsList = ({ meals, onMealFilter }) => {
  //FIXME: refactor all this workaround and avoid tones of dupliction and bad code
  const [selectedMeal, setSelectedMeal] = useState(null);
  const allRef = useRef();
  const riceRef = useRef();
  const pastaRef = useRef();
  const chickenRef = useRef();
  const meatRef = useRef();
  const dessertRef = useRef();
  const handleActivateMeal = (type) => {
    setSelectedMeal(null);
    if (type === "all") {
      setSelectedMeal(allRef.current);
    } else if (type === "rice") {
      setSelectedMeal(riceRef.current);
    } else if (type === "pasta") {
      setSelectedMeal(pastaRef.current);
    } else if (type === "chicken") {
      setSelectedMeal(chickenRef.current);
    } else if (type === "meat") {
      setSelectedMeal(meatRef.current);
    } else if (type === "dessert") {
      setSelectedMeal(dessertRef.current);
    }
  };

  return (
    <section className="container">
      <Card>
        <div className={classes.types}>
          <ul className={classes["type__list"]}>
            <li
              className={
                selectedMeal === allRef.current
                  ? `${classes["type__item"]} ${classes.active}`
                  : `${classes["type__item"]}`
              }
              onClick={() => {
                onMealFilter("all");
                handleActivateMeal("all");
              }}
              ref={allRef}
            >
              All Meals
            </li>
            <li
              className={
                selectedMeal === riceRef.current
                  ? `${classes["type__item"]} ${classes.active}`
                  : `${classes["type__item"]}`
              }
              onClick={() => {
                onMealFilter("rice");
                handleActivateMeal("rice");
              }}
              ref={riceRef}
            >
              Rice
            </li>
            <li
              className={
                selectedMeal === pastaRef.current
                  ? `${classes["type__item"]} ${classes.active}`
                  : `${classes["type__item"]}`
              }
              onClick={() => {
                onMealFilter("pasta");
                handleActivateMeal("pasta");
              }}
              ref={pastaRef}
            >
              Pasta
            </li>
            <li
              className={
                selectedMeal === chickenRef.current
                  ? `${classes["type__item"]} ${classes.active}`
                  : `${classes["type__item"]}`
              }
              onClick={() => {
                onMealFilter("chicken");
                handleActivateMeal("chicken");
              }}
              ref={chickenRef}
            >
              Chicken
            </li>
            <li
              className={
                selectedMeal === meatRef.current
                  ? `${classes["type__item"]} ${classes.active}`
                  : `${classes["type__item"]}`
              }
              onClick={() => {
                onMealFilter("meat");
                handleActivateMeal("meat");
              }}
              ref={meatRef}
            >
              Meat
            </li>
            <li
              className={
                selectedMeal === dessertRef.current
                  ? `${classes["type__item"]} ${classes.active}`
                  : `${classes["type__item"]}`
              }
              onClick={() => {
                onMealFilter("dessert");
                handleActivateMeal("dessert");
              }}
              ref={dessertRef}
            >
              Dessert
            </li>
          </ul>
        </div>
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
