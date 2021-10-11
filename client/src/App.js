import "./App.css";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { PokemonDetails } from "./components/PokemonDetails/PokemonDetails";
import { Nav } from "./components/Nav/Nav";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";
import { getType } from "./actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getType());
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <>
          <Nav />
          <Route exatc path="/home" component={Home} />
          <Route exact path="/pokemon/:name" component={PokemonDetails} />
          <Route exact path="/create" component={CreatePokemon} />
        </>
      </Switch>
    </div>
  );
}

export default App;
