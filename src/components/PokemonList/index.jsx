
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getPokemonList, getPokemonDetails } from '../../services/PokeAPI/pokeAPI'
import { CardPokemons } from '../CardPokemons'
import { usePokedex } from '../../contexts/PokedexContext';
import style from './styles.module.css'

export const PokemonList = ({page,setTotalPage}) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const {pokeSearch} = usePokedex();
    
    const pokemonsPorPages = 25;

    function fillPokemonList() {

        const offset = page * pokemonsPorPages;

        getPokemonList(pokemonsPorPages, offset).then(async (results) => {

            const limitePokemonsAPI = 625;

           const pokemonsTotal = Math.min(results.data.count, limitePokemonsAPI)
           setTotalPage(Math.ceil(pokemonsTotal/ pokemonsPorPages));
            
           const listPoke = results.data.results;

            const pokeDetailsPromisses = listPoke.map((pokemon) => {

                return getPokemonDetails(pokemon.name);
            });

            const pokeDetailsResponse = await Promise.all(pokeDetailsPromisses)

            const listCompletPokemons = pokeDetailsResponse.map((res) => res.data)
            setPokemonList(listCompletPokemons);

        }).catch((e) => {
            console.error("Erro ao carregar...",e);
        }).finally(() => {
            setLoading(false);
        });
    }
    useEffect(() => {
        fillPokemonList();
    }, [page]);

    if (loading) {
        return <div>Carregando Pokémons...</div>
    }
  
    return (
        <div className={style.pokemonList}>
            {pokeSearch && pokeSearch.name ? (
                <CardPokemons key={pokeSearch.id} pokemon={pokeSearch} />
            ) : (
                pokemonList.map((pokemon) => (
                    <CardPokemons  key={pokemon.id} pokemon={pokemon} />
                ))
            )}
        </div>
    )
}