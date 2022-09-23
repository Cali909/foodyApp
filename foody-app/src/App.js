import api from "./api/meals";
import { Fragment, useEffect, useState } from "react";
import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import MealsList from "./components/Meals/MealsList";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "./store";
import OrderReceipt from "./components/Cart/OrderReceipt";

//TODO: refactor code and split functions
function App() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderIsDone, setOrderIsDone] = useState(false);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const fetchMeals = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await api.get("/meals");
      setMeals(response.data);
      dispatch(cartActions.setMeals(response.data));
    } catch (err) {
      setError(`Something went wrong!
      Error status: ${err.response.status}`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  useEffect(() => {
    if (cart.cartMeals.length === 0) {
      setCartIsShown(false);
    }
  }, [cart.cartMeals.length]);

  const handleShowCart = () => {
    setCartIsShown(true);
  };
  const handleHideCart = () => {
    setCartIsShown(false);
  };

  const handleShowReceipt = () => {
    setOrderIsDone(true);
  };

  const handleHideReceipt = () => {
    setOrderIsDone(false);
    dispatch(cartActions.reset());
  };

  let filteredMeals = meals;
  const handleMealFilter = (type) => {
    switch (type) {
      case "rice": {
        filteredMeals = cart.meals.filter(
          (meal) => meal.type1 === "rice" || meal.type2 === "rice"
        );
        setMeals(filteredMeals);
        break;
      }
      case "pasta": {
        filteredMeals = cart.meals.filter(
          (meal) => meal.type1 === "pasta" || meal.type2 === "pasta"
        );
        setMeals(filteredMeals);
        break;
      }
      case "chicken": {
        filteredMeals = cart.meals.filter(
          (meal) => meal.type1 === "chicken" || meal.type2 === "chicken"
        );
        setMeals(filteredMeals);
        break;
      }
      case "meat": {
        filteredMeals = cart.meals.filter(
          (meal) => meal.type1 === "meat" || meal.type2 === "meat"
        );
        setMeals(filteredMeals);
        break;
      }
      case "dessert": {
        filteredMeals = cart.meals.filter(
          (meal) => meal.type1 === "dessert" || meal.type2 === "desert"
        );
        setMeals(filteredMeals);
        break;
      }
      case "all": {
        filteredMeals = cart.meals;
        setMeals(filteredMeals);
        break;
      }

      default:
        filteredMeals = meals;
        break;
    }
    return filteredMeals;
  };

  let content = <p>No Meals Found</p>;
  if (filteredMeals.length > 0) {
    content = (
      <MealsList meals={handleMealFilter()} onMealFilter={handleMealFilter} />
    );
  }
  if (error) {
    content = <p className="centered-text loading-error">{error}</p>;
  }
  if (isLoading) {
    content = <p className="centered-text loading-error">Loading...</p>;
  }

  return (
    <Fragment>
      {cartIsShown && (
        <Cart onHideCart={handleHideCart} onShowReceipt={handleShowReceipt} />
      )}
      {orderIsDone && <OrderReceipt onHideReceipt={handleHideReceipt} />}
      <Header logo={"Foody"} onShowCart={handleShowCart} />
      <main>
        <Summary />
        {content}
      </main>
    </Fragment>
  );
}

export default App;
