import { useState,useContext } from "react";
import style from './styles.module.css';
import { searchPokemon } from "../../services/PokeAPI/api";
import { usePokedex } from "../../contexts/PokedexContext";


export const Searchbar = () => {
    const [search, setSearch] = useState("dito")
    const [pokemon, setPokemon] = useState();

    const {pokedex, addPokemon, dropPokemon} = usePokedex();

    const onChangeHandle = (e) => {
        console.log("pokemon: ", e.target.value);
        setSearch(e.target.value);
    }

    const onButtonClickHandle = () => {
        onSearchHandle(search)
    }

    const onSearchHandle = async (pokemon) => {
        const results = await searchPokemon(pokemon)
        setPokemon(results)
    }

    return (

        <div>
            <div className={style.searchBar}>
                <input className={style.searchinput} placeholder="Buscar Pokémon" type="search" onChange={onChangeHandle} />
                <button className={style.pokeButton} onClick={onButtonClickHandle}>
                    <img className={style.pokeButtonImg} src="src\assets\Pokebola-pokeball-png-0.png" alt="pokeButton" />
                </button>
            </div>
            {pokemon ? (
                <div className={style.pokemonCard}>
                    <div>{pokemon.name}</div>
                    <p>ID: #{pokemon.id}</p>
                    <img
                        src={pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default}
                        alt={pokemon.name} />

                    <div className={style.types}>
                        <h3>Tipos:</h3>
                        {pokemon.types.map((info) => (
                            <div key={info.type.name} className={style.typePoke}>
                                {info.type.name}
                            </div>
                        ))}
                    </div>
                    <div className={style.stats}>
                        <h3>Status Base:</h3>
                        <ul>
                            {pokemon.stats.map((statInfo) => (
                                <li key={statInfo.stat.name}>
                                    <strong>{statInfo.stat.name}:</strong> {statInfo.base_stat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : null}
        </div>

    )
}