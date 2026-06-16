import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";

export const CardPokemons = ({pokemon}) => {
  const [pokedex,addPokemon,dropPokemon] = useContext(PokedexContext);

  const isCapture = pokemon.name((p) => p.id === pokemon.id);

   return(
      <div>
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
         <h3>{pokemon.name}</h3>

         <button onClick={() => isCaptured ? dropPokemon(pokemon.id) : addPokemon(pokemon)}>
                {isCaptured ? "Soltar" : "Capturar"}
            </button>
      </div>
   )



}