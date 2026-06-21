import axios from 'axios';

export const BASE_URL_POKE_API = 'https://pokeapi.co';

const apiPoke = axios.create({
    baseURL:BASE_URL_POKE_API + '/api/v2/'
});

export function getPokemonList(limite = 625, offset = 0) {
   const url = `pokemon?limit=${limite}&offset=${offset}`;
    return apiPoke.get(url);
}

export function getPokemonDetails(name) {
	const url = 'pokemon/' + name;
	return apiPoke.get(url);
}

export const searchPokemon = async (pokemon) => {
   try{
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const response = await fetch(url)
      return response.data
   }catch (error){
    console.log("error",error)
   }
}
