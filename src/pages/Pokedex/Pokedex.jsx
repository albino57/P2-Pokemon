import { useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import { CardPokemons } from "../../components/CardPokemons";

export const Pokedex = () => {
 
    const {pokedex} = useContext(PokedexContext)

  return (
    <div>
      
    </div>
  )
};
