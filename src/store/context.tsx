import React, { createContext, useReducer } from 'react';
import { pokemonsListReducer, PokemonsListActions } from './reducer';

import { PokemonShort } from "../models/PokemonShort";

type InitialStateType = {
  pokemonsList: PokemonShort[];
};

const initialState = {
  pokemonsList: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<PokemonsListActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = ({ pokemonsList }: InitialStateType, action : PokemonsListActions) => ({
  pokemonsList: pokemonsListReducer(pokemonsList, action)
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };
