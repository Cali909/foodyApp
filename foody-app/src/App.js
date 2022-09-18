import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";

function App() {
  return (
    <Fragment>
      <Header logo={"Foody"} />
      <main>
        <Summary />
      </main>
    </Fragment>
  );
}

export default App;
