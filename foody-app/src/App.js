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

  let content = <p>No Meals Found</p>;
  if (meals.length > 0) {
    content = <MealsList meals={meals} />;
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
