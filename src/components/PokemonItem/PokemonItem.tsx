import React, { useState } from "react";

import { PokemonFull } from "../../models/PokemonFull";
import { capitalizeString } from "../../utils/StringUtils";

import "./PokemonItem.scss";
import { Card } from "react-bootstrap";

interface IPokemonItemProps {
  pokemon: PokemonFull;
}

const PokemonItem: React.FC<IPokemonItemProps> = ({ pokemon }) => {
  console.log(pokemon);
  const [srcImgUrl, setSrcImgUrl] = useState<string>(
    `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
  );
  return (
    <Card className="pokemon-item">
      <Card.Body>
        <Card.Img variant="top" src={srcImgUrl} alt={pokemon.name} />
        <Card.Title>
          <h5>{capitalizeString(pokemon.name)}</h5>
        </Card.Title>
        <div>
          <label>Identifiant :</label> {pokemon.id}
        </div>
        <div>
          <label>Taille :</label> {pokemon.height}
        </div>
        <div>
          <label>Poids (en dm) :</label> {pokemon.weight}
        </div>
        <div>
          <label>Expérience :</label> {pokemon.base_experience}
        </div>
        <div>
          <label>Ordre :</label> {pokemon.order}
        </div>
      </Card.Body>
    </Card>
  );
};

export default PokemonItem;
