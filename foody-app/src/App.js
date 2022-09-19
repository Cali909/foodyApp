import api from "./api/meals";
import { Fragment, useEffect, useState } from "react";
import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import MealsList from "./components/Meals/MealsList";
import Cart from "./components/Cart/Cart";

function App() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [cartIsShown, setCartIsShown] = useState(false);

  const fetchMeals = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await api.get("/meals");
      setMeals(response.data);
    } catch (err) {
      setError(`Something went wrong!
      Error status: ${err.response.status}`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const handleShowCart = () => {
    setCartIsShown(true);
  };
  const handleHideCart = () => {
    setCartIsShown(false);
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
      {cartIsShown && <Cart onHideCart={handleHideCart} />}
      <Header logo={"Foody"} onShowCart={handleShowCart} />
      <main>
        <Summary />
        {content}
      </main>
    </Fragment>
  );
}

export default App;
