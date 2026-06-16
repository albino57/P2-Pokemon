import axios from 'axios';

export const BASE_URL_POKE_API = 'https://pokeapi.co';

const apiPoke = axios.create({
    baseURL:BASE_URL_POKE_API + '/api/v2/'
});

export function getPokemonList() {
    const url = 'pokemon/'

    return apiPoke.get(url);
}

export function getPokemonDetails(id) {
	const url = 'pokemon/' + name;

	return apiPoke.get(url);
}