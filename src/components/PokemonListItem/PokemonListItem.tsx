import React from "react";

import "./PokemonListItem.scss";
import { Card } from "react-bootstrap";

interface IPokemonListItemProps {
  pokemonName: string;
  navigateToPokemon: NavigateToPokemon;
}

type NavigateToPokemon = (pokemonName: string) => void;

const PokemonListItem: React.FC<IPokemonListItemProps> = ({ pokemonName, navigateToPokemon }) => {
  return (
    <Card
      className="pokemon-list-item"
      onClick={() => {
        navigateToPokemon(pokemonName);
      }}
    >
      <Card.Body>
        <h5>{pokemonName}</h5>
      </Card.Body>
    </Card>
  );
};

export default PokemonListItem;
