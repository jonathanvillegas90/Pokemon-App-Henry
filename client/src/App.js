import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Route } from "react-router-dom";

import { useEffect } from "react";
import { getAll } from "./actions";
import { useDispatch } from "react-redux";
import { Home } from "./components/Home/Home";
import { PokemonDetails } from "./components/PokemonDetails/PokemonDetails";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exatc path="/home" component={Home} />
      <Route exact path="/details" component={PokemonDetails} />
    </div>
  );
}

export default App;
