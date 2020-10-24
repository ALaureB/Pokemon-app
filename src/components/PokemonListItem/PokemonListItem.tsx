import React from "react";

import "./PokemonListItem.scss";
import { Card } from "react-bootstrap";

interface IPokemonListItemProps {
  pokemonName: string;
}

const PokemonListItem: React.FC<IPokemonListItemProps> = ({ pokemonName }) => {
  return (
    <Card className="pokemon-list-item">
      <Card.Body>
        <h5>{pokemonName}</h5>
      </Card.Body>
    </Card>
  );
};

export default PokemonListItem;
