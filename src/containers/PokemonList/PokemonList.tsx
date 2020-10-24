import React, { useState, useEffect } from "react";
import { axiosRequest } from "../../utils/AxiosUtils";
import { pokemonListQueryBuilder } from "../../utils/AxiosUtils";

import { PokemonShort } from "../../models/PokemonShort";

import "./PokemonList.scss";
import { Row, Col, Spinner } from "react-bootstrap";

import PokemonListItem from "../../components/PokemonListItem/PokemonListItem";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonShort[]>([]);
  const [pokemonListUrl, setPokemonListUrl] = useState(
    pokemonListQueryBuilder(50, 0)
  );
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosRequest.get(pokemonListUrl);

        if (response.data && response.data.results.length > 0) {
          console.log(response);
          setDataLoading(false);

          let pokemons: PokemonShort[] = [];
          response.data.results.forEach((result: any) => {
            pokemons.push(result);
          });

          pokemons = pokemons.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })

          setPokemons(pokemons);
        }
      } catch (e) {
        console.log(e);
        setDataLoading(false);
      }
    }

    fetchData();
  }, [pokemonListUrl]);

  return (
    <Row className="no-gutters">
      <Col xs={12} className="pokemon-list">
        {dataLoading && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="ml-2"
          />
        )}

        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => (
            <PokemonListItem pokemonName={pokemon.name} key={index} />
          ))}
      </Col>
    </Row>
  );
};

export default PokemonList;
