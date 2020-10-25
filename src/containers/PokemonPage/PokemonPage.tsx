import React, { useState, useEffect } from "react";
import { axiosRequest } from "../../utils/AxiosUtils";
import { pokemonDetailQueryBuilder } from "../../utils/AxiosUtils";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { PokemonFull } from "../../models/PokemonFull";

import "./PokemonPage.scss";

type TParams = { name: string };

const PokemonPage: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const [pokemonUrl, setPokemonUrl] = useState(
    pokemonDetailQueryBuilder(match.params.name)
  );
  const [currentPokemon, setCurrentPokemon] = useState<PokemonFull>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosRequest.get(pokemonUrl);
        console.log(response);

        if (response.data) {
          setCurrentPokemon(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [pokemonUrl]);

  return (
    <div>
      {currentPokemon && (
        <div>
          <div>{currentPokemon.name}</div>
          <div>{currentPokemon.weight}</div>
        </div>
      )}
    </div>
  );
};

export default withRouter(PokemonPage);
