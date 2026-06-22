import { useContext, useState } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import style from './styles.module.css'
import { useNavigate } from "react-router";
import { TypeBackground } from "../TypeBackground";


export const CardPokemons = ({ pokemon }) => {
    const { pokedex, addPokemon, dropPokemon } = useContext(PokedexContext);

    const navigate = useNavigate();

    const isCaptured = pokedex.some((item) => item.id === pokemon.id);

    const [status, setStatus] = useState('idle');
  
    const mainType = pokemon.types && pokemon.types.length > 0 ? pokemon.types[0].type.name : 'normal';
    const backgroundImage = TypeBackground[mainType] || TypeBackground['normal'];

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
    
    function handleOpenCardPokemon(){
        navigate (`/pokemon/${pokemon.id}`),{
            state:{pokemon} 
        }}

    let imagemPokemon = pokemon.sprites.versions["generation-v"]
    ["black-white"].animated.front_default
  
    if(imagemPokemon === null){
         imagemPokemon = `https://play.pokemonshowdown.com/sprites/ani/${pokemon.name}.gif`;
    }

    return (
        <div className={style.pokeCard} onClick={handleOpenCardPokemon}
           style={{ 
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            } }
        >
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
            <button className = {style.captureBttn} onClick={(e) =>{e.stopPropagation();
                        isCaptured ? handleSoltar() : handleCapturar()}}>
                {isCaptured ? "Soltar" : "Capturar"}
            </button>
            )}
            {status === 'capturando' && <div className={style.captureBttnStatus}>Capturando...</div>}
            {status === 'capturado' && <div className={style.captureBttnStatus}>Capturado!</div>}
        </div>
    )
}