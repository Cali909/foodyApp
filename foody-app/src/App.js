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
      {/* <Cart /> */}
      <Header logo={"Foody"} />
      <main>
        <Summary />
        {content}
      </main>
    </Fragment>
  );
}

export default App;
