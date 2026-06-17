import { useContext, useState } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import style from './styles.module.css'

export const CardPokemons = ({ pokemon }) => {
    const {pokedex, addPokemon, dropPokemon} = useContext(PokedexContext);

    const isCaptured = pokedex.some((item) => item.id === pokemon.id);;

   const imagemPokemon = pokemon.sprites?.other['official-artwork']?.front_default 
                          || pokemon.sprites?.front_default;

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
        <div className={style.card}>
            <img src={imagemPokemon} alt={pokemon.name} className={style.pokeImage} />
            <h3>{pokemon.name}</h3>
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