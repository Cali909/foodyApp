import MealItem from "./MealItem";
import classes from "./MealsList.module.css";
import Card from "./../UI/Card";
import { useState, useRef } from "react";

const MealsList = ({ meals, onMealFilter }) => {
  const items = [];
  const handleActivateMeal = (index) => {
    items.forEach((item) => item.classList.remove(classes.active));
    items[index].classList.add(classes.active);
  };

  return (
    <section className="container">
      <Card>
        <div className={classes.types}>
          <ul className={classes["type__list"]}>
            <li
              className={`${classes["type__item"]}`}
              onClick={() => {
                onMealFilter("all");
                handleActivateMeal(0);
              }}
              ref={(item) => {
                items.push(item);
              }}
            >
              All Meals
            </li>
            <li
              className={`${classes["type__item"]}`}
              onClick={() => {
                onMealFilter("rice");
                handleActivateMeal(1);
              }}
              ref={(item) => {
                items.push(item);
              }}
            >
              Rice
            </li>
            <li
              className={`${classes["type__item"]}`}
              onClick={() => {
                onMealFilter("pasta");
                handleActivateMeal(2);
              }}
              ref={(item) => {
                items.push(item);
              }}
            >
              Pasta
            </li>
            <li
              className={`${classes["type__item"]}`}
              onClick={() => {
                onMealFilter("chicken");
                handleActivateMeal(3);
              }}
              ref={(item) => {
                items.push(item);
              }}
            >
              Chicken
            </li>
            <li
              className={`${classes["type__item"]}`}
              onClick={() => {
                onMealFilter("meat");
                handleActivateMeal(4);
              }}
              ref={(item) => {
                items.push(item);
              }}
            >
              Meat
            </li>
            <li
              className={`${classes["type__item"]}`}
              onClick={() => {
                onMealFilter("dessert");
                handleActivateMeal(5);
              }}
              ref={(item) => {
                items.push(item);
              }}
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
