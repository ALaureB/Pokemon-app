import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import { Container } from "react-bootstrap";

import Header from "../Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Presentation from "../../components/Presentation/Presentantion";
import PokemonList from "../PokemonList/PokemonList";
import PokemonPage from "../PokemonPage/PokemonPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Container fluid className="pokemon-app p-0"></Container>

      <Switch>
        <Route path="/pokemon/:name">
          <PokemonPage />
        </Route>
        <Route path="/">
          <Header />
          <Presentation />
          <PokemonList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
