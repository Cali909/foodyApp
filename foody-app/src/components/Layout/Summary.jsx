import classes from "./Summary.module.css";
import Card from "./../UI/Card";

const Summary = () => {
  return (
    <section className={`${classes.summary} container`}>
      <Card>
        <h2 className={classes["summary__header"]}>
          Order High Quality and Delicious Food Cooked by the Best Chefs of the
          State
        </h2>
        <p className={classes["summary__description"]}>
          A large variety of food suitable for all diet plans and tastes will be
          on your table in 5 minutes
        </p>
        <p className={classes["summary__description"]}>
          Want to have dinner in a fancy reastaurant? Reserve a table and we
          will be ready to serve
        </p>
      </Card>
    </section>
  );
};

export default Summary;
