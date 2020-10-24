import axios from "axios";

export const axiosRequest = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

export function pokemonListQueryBuilder(limit: number, offset: number): string {
  return `pokemon/?limit=${limit}&offset=${offset}`;
}
