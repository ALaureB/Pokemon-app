import React, { useState, useEffect } from "react";
import { axiosRequest } from "../../utils/AxiosUtils";
import { pokemonListQueryBuilder } from "../../utils/AxiosUtils";
import { useHistory } from "react-router-dom";

import { PokemonShort } from "../../models/PokemonShort";

import "./PokemonList.scss";
import { Row, Col } from "react-bootstrap";

import Pagination from "../../components/Pagination/Pagination";
import PokemonListItem from "../../components/PokemonListItem/PokemonListItem";
import SpinnerButton from "../../components/SpinnerButton/SpinnerButton";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonShort[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [pokemonListUrl, setPokemonListUrl] = useState<string>(
    pokemonListQueryBuilder(50, offset)
  );
  const [dataLoading, setDataLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);

  const history = useHistory();

  const numberOfItemsByPage = 50;

  function changeOffset(offset: number) {
    setOffset(offset);
    setPokemonListUrl(pokemonListQueryBuilder(50, offset));
  }

  function navigateToPokemon(pokemonName: string) {
    return history.push(`/pokemon/${pokemonName}`);
  }

  function updateNumberOfPages(): number {
    return Math.ceil(pokemons.length / numberOfItemsByPage);
  }

  function updateCurrentPage(currentPage: number) {
    setCurrentPage(currentPage);
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

  useEffect(() => {
    setNumberOfPages(updateNumberOfPages());
  }, [pokemons]);

  return (
    <Row className="no-gutters">
      <Col xs={12} md={6}>
        <Pagination
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          updateCurrentPage={updateCurrentPage}
        />
      </Col>

      {pokemons.length > 0 && (
        <Col xs={12} md={6}>
          <SpinnerButton
            shouldShowSpinner={dataLoading}
            currentOffset={offset}
            updateOffset={changeOffset}
          />
        </Col>
      )}

      <Col xs={12} className="pokemon-list">
        {pokemons.length > 0 &&
          pokemons
            .slice(
              (currentPage - 1) * numberOfItemsByPage,
              (currentPage - 1) * numberOfItemsByPage + numberOfItemsByPage
            )
            .map((pokemon, index) => (
              <PokemonListItem
                pokemon={pokemon}
                key={index}
                navigateToPokemon={navigateToPokemon}
              />
            ))}
      </Col>
    </Row>
  );
};

export default PokemonList;
