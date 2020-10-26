import { PokemonShort } from "../models/PokemonShort";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Update = "UPDATE_POKEMONS_LIST",
}

type PokemonsListPayload = {
  [Types.Update]: PokemonShort[];
};

export type PokemonsListActions = ActionMap<
  PokemonsListPayload
>[keyof ActionMap<PokemonsListPayload>];

export const pokemonsListReducer = (state: PokemonShort[], action: PokemonsListActions) => {
  switch (action.type) {
    case "UPDATE_POKEMONS_LIST":
        return [...state, ...action.payload];
    default:
      return state;
  }
};
