import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import style from './styles.module.css'

export const CardPokemons = ({ pokemon }) => {
    const {pokedex, addPokemon, dropPokemon} = useContext(PokedexContext);

    const isCaptured = pokedex.some((item) => item.id === pokemon.id);;

   const imagemPokemon = pokemon.sprites?.other['official-artwork']?.front_default 
                          || pokemon.sprites?.front_default;

    return (
        <div className={style.card}>
            <img src={imagemPokemon} alt={pokemon.name} className={style.pokeImage} />
            <h3>{pokemon.name}</h3>
            <button onClick={() => isCaptured ? dropPokemon(pokemon.id) : addPokemon(pokemon)}>
                {isCaptured ? "Soltar" : "Capturar"}
            </button>
        </div>
    )



}