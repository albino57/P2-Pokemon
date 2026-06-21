import { usePokedex } from "../../contexts/PokedexContext";
import { CardPokemons } from "../../components/CardPokemons";
import style from './style.module.css'

export const Pokedex = () => {
  const { pokedex } = usePokedex();

  return (
    <div className={style.pokedexContainer}>
      {pokedex.length === 0 ? (
        <p className={style.mensagemVazia}>Você ainda não capturou nenhum Pokémon</p>
      ) : (
        <div className={style.pokedexGrid}>
          {pokedex.map((pokemon) => (
            <CardPokemons pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      )}
    </div>
  );
};