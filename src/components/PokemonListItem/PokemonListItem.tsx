import React from "react";

import { PokemonShort } from "../../models/PokemonShort";
import { capitalizeString } from "../../utils/StringUtils";

import "./PokemonListItem.scss";
import { Card } from "react-bootstrap";

interface IPokemonListItemProps {
  pokemon: PokemonShort;
  navigateToPokemon: NavigateToPokemon;
}

type NavigateToPokemon = (pokemonName: string) => void;

const PokemonListItem: React.FC<IPokemonListItemProps> = ({
  pokemon,
  navigateToPokemon,
}) => {
  return (
    <Card
      className="pokemon-list-item"
      onClick={() => {
        navigateToPokemon(pokemon.name);
      }}
    >
      <Card.Body>
        <h5>{capitalizeString(pokemon.name)}</h5>
      </Card.Body>
    </Card>
  );
};

export default PokemonListItem;
