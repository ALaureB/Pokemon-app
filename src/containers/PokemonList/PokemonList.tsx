import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../store/context";
import { axiosRequest } from "../../utils/AxiosUtils";
import { pokemonListQueryBuilder } from "../../utils/AxiosUtils";
import { useHistory } from "react-router-dom";

import { PokemonShort } from "../../models/PokemonShort";
import { Types } from "../../store/reducer";

import "./PokemonList.scss";
import { Row, Col } from "react-bootstrap";

import Pagination from "../../components/Pagination/Pagination";
import PokemonListItem from "../../components/PokemonListItem/PokemonListItem";
import SpinnerButton from "../../components/SpinnerButton/SpinnerButton";

const PokemonList: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  
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
    return Math.ceil(state.pokemonsList.length / numberOfItemsByPage);
  }

  function updateCurrentPage(currentPage: number) {
    setCurrentPage(currentPage);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosRequest.get(pokemonListUrl);

        if (response.data && response.data.results.length > 0) {
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

          dispatch({
            type: Types.Update,
            payload: pokemonsList
          });
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
  }, [state.pokemonsList]);

  return (
    <Row className="no-gutters">
      <Col xs={12} md={6}>
        <Pagination
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          updateCurrentPage={updateCurrentPage}
        />
      </Col>

      {state.pokemonsList.length > 0 && (
        <Col xs={12} md={6} className="text-center">
          <SpinnerButton
            shouldShowSpinner={dataLoading}
            currentOffset={offset}
            updateOffset={changeOffset}
          />
        </Col>
      )}

      <Col xs={12} className="text-center">
        <span className="h5">{state.pokemonsList.length}</span> pokemons
      </Col>

      <Col xs={12} className="pokemon-list">
        {state.pokemonsList.length  > 0 &&
          state.pokemonsList
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
