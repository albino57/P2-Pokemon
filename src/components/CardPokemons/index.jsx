import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import style from './styles.module.css'
import { UNSAFE_useFogOFWarDiscovery } from "react-router";

export const CardPokemons = ({ pokemon }) => {
    const { pokedex, addPokemon, dropPokemon } = useContext(PokedexContext);

    const isCaptured = pokedex.some((item) => item.id === pokemon.id);

    const imagemPokemon = pokemon.sprites.other['official-artwork'].front_default


    return (
        <div className={style.pokeCard}>
            <div className={style.idPoke}>#{pokemon.id}</div>
            <div className={style.cardImg}>
                <img src={imagemPokemon} alt={pokemon.name} className={style.pokeImage} />
            </div>
            <div className={style.bodyCard}>

                <div className={style.topCard}>
                    <h3 className={style.pokeName}>{pokemon.name}</h3>

                </div>

                <div className={style.bottomCard}>

                    <div className={style.typesCard}>
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index}
                                    className={`${style.typeText} ${style[type.type.name]}`}>{type.type.name}</div>
                            )
                        })}
                    </div>
                   
                </div>
            </div>

            <button onClick={() => isCaptured ? dropPokemon(pokemon.id) : addPokemon(pokemon)}>
                {isCaptured ? "Soltar" : "Capturar"}
            </button>



        </div>
    )
}