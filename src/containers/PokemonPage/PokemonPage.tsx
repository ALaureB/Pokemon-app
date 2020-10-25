import React, { useState, useEffect } from "react";
import { axiosRequest } from "../../utils/AxiosUtils";
import { pokemonDetailQueryBuilder } from "../../utils/AxiosUtils";

import { PokemonFull } from "../../models/PokemonFull";

import "./PokemonPage.scss";

const PokemonPage: React.FC = () => {
  const [pokemon, setPokemon] = useState();
  const [pokemonUrl, setPokemonUrl] = useState(
    pokemonDetailQueryBuilder("rotom")
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosRequest.get(pokemonUrl);
        console.log("la");
        console.log(response);

        if (response.data && response.data.results.length > 0) {
          console.log(response);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [pokemonUrl]);

  return <div>coucou</div>;
};

export default PokemonPage;
