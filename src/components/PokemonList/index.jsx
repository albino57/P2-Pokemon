
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getPokemonList, getPokemonDetails } from '../../services/PokeAPI/pokeAPI'
import { CardPokemons } from '../CardPokemons'
import style from './styles.module.css'

export const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    function fillPokemonList() {
        getPokemonList().then(async (results) => {
            
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
    }, []);

    if (loading) {
        return <div>Carregando Pokémons...</div>
    }

    return (
        <div className={style.pokemonList}>
            {pokemonList.map((pokemon) => {
                return <CardPokemons key={pokemon.id}
                    pokemon={pokemon} />
            })}
        </div>
    )
}