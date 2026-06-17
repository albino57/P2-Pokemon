import { useContext, useState } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import style from './styles.module.css'
import { UNSAFE_useFogOFWarDiscovery } from "react-router";

export const CardPokemons = ({ pokemon }) => {
    const { pokedex, addPokemon, dropPokemon } = useContext(PokedexContext);

    const isCaptured = pokedex.some((item) => item.id === pokemon.id);

    const imagemPokemon = pokemon.sprites.other['official-artwork'].front_default


    const [status, setStatus] = useState('idle');
    
    function handleCapturar() {
        setStatus('capturando');

        setTimeout(() => {
            addPokemon(pokemon);
            setStatus('capturado');
        }, 1500);

        setTimeout(() => {
            setStatus('idle');
        }, 3000);
    }          
    
    function handleSoltar() {
        dropPokemon(pokemon.id);
    }

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
            {status == 'idle' && (
            <button onClick={() => isCaptured ? handleSoltar() : handleCapturar()}>
                {isCaptured ? "Soltar" : "Capturar"}
            </button>
            )}
            {status === 'capturando' && <p>Capturando...</p>}
            {status === 'capturado' && <p>Capturado!</p>}
        </div>
    )
}