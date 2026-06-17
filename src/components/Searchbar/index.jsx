import { useState,useContext } from "react";
import style from './styles.module.css';
import { getPokemonDetails, searchPokemon } from "../../services/PokeAPI/pokeAPI";
import { usePokedex } from "../../contexts/PokedexContext";
import { CardPokemons } from "../CardPokemons";


export const Searchbar = () => {
    const [search, setSearch] = useState("")
    const [pokemon, setPokemon] = useState();

    
    const{setPokeSearch} = usePokedex();

    const onChangeHandle = (e) => {
        const value = e.target.value;
        setSearch(value);

        if(value === ""){
            setPokeSearch(null)
        }
    }

    const onButtonClickHandle = (e) => {
        e.preventDefault();
        if(search.trim() !==""){

            onSearchHandle(search.toLowerCase().trim());
        }
    }

    const onSearchHandle = async (pokemon) => {
        const results = await getPokemonDetails(pokemon)
        setPokeSearch(results.data)
    }

    return (

        <div>
            <div className={style.searchBar}>
                <input className={style.searchinput} placeholder="Buscar Pokémon" type="search" onChange={onChangeHandle} />
                <button className={style.pokeButton} onClick={onButtonClickHandle}>
                    <img className={style.pokeButtonImg} src="src\assets\Pokebola-pokeball-png-0.png" alt="pokeButton" />
                </button>
            </div>
           
        </div>

    )
}