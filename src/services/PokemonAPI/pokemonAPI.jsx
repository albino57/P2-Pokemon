import axios from "axios";

const api = axios.create({
  baseURL: "https://6a3188997bc5e1c61265e787.mockapi.io",
});

export function getPokemons() {
  return api.get("/pokemons");
}

export function createPokemon(data) {
  return api.post("/pokemons", data);
}

export function deletePokemon(id) {
    return api.delete(`/pokemons/${id}`);
}