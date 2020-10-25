import React, { useState, useEffect } from "react";
import { axiosRequest } from "../../utils/AxiosUtils";
import { pokemonListQueryBuilder } from "../../utils/AxiosUtils";
import { useHistory } from "react-router-dom";

import { PokemonShort } from "../../models/PokemonShort";

import "./PokemonList.scss";
import { Row, Col } from "react-bootstrap";

import PokemonListItem from "../../components/PokemonListItem/PokemonListItem";
import SpinnerButton from "../../components/SpinnerButton/SpinnerButton";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonShort[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [pokemonListUrl, setPokemonListUrl] = useState(
    pokemonListQueryBuilder(50, offset)
  );
  const [dataLoading, setDataLoading] = useState(true);
  const history = useHistory();

  function changeOffset(offset: number) {
    setOffset(offset);
    setPokemonListUrl(pokemonListQueryBuilder(50, offset));
  }

  function navigateToPokemon(pokemonName: string) {
    return history.push(`/pokemon/${pokemonName}`);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosRequest.get(pokemonListUrl);

        if (response.data && response.data.results.length > 0) {
          console.log(response);
          setDataLoading(false);

          let pokemonsList: PokemonShort[] = [];
          response.data.results.forEach((result: any) => {
            pokemonsList.push(result);
          });

          pokemonsList = pokemonsList.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });

          setPokemons((prev) => [...prev, ...pokemonsList]);
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
        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => (
            <PokemonListItem
              pokemon={pokemon}
              key={index}
              navigateToPokemon={navigateToPokemon}
            />
          ))}
      </Col>

      {pokemons.length > 0 && (
        <Col xs={12} className="mb-5 mt-4 text-center">
          <SpinnerButton
            shouldShowSpinner={dataLoading}
            currentOffset={offset}
            updateOffset={changeOffset}
          />
        </Col>
      )}
    </Row>
  );
};

export default PokemonList;
