import React from 'react';

import './App.scss';
import { Container } from "react-bootstrap";

import Header from "../Header/Header";
import Presentation from "../../components/Presentation/Presentantion";
import PokemonList from "../PokemonList/PokemonList";

function App() {
  return (
    <Container fluid className="bosheaga-app p-0">
        <Header />
        <Presentation />
        <PokemonList />
    </Container>
  );
}

export default App;
