import React from "react";

import "./App.scss";
import { Container } from "react-bootstrap";

import Header from "../Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Presentation from "../../components/Presentation/Presentantion";
import PokemonList from "../PokemonList/PokemonList";

function App() {
  return (
    <Container fluid className="pokemon-app p-0">
      <Header />
      <NavBar />
      <Presentation />
      <PokemonList />
    </Container>
  );
}

export default App;
