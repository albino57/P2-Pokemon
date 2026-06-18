import {useEffect,useState} from "react";
import { useParams,useNavigate, useLocation  } from "react-router-dom";
import { getPokemonDetails } from "../../services/PokeAPI/pokeAPI";
import style from './styles.module.css'

export const PokemonDetails = () => {
 
    const {id} = useParams();
    const navigate = useNavigate();
    const location = useLocation()
    
    const pokemonState = location.state?.pokemon;
    
    const [pokemon,setPokemon]=useState(pokemonState || null)
    const [loading, setLoading] = useState(!pokemonState);

     async function loadCardPokemon() {
         try{
            const response = await getPokemonDetails(id);
            setPokemon(response.data);
         }catch(e){
            console.error(e);
         }finally{
           setLoading(false);
         }
     }

      
    useEffect(() => {
        if(!pokemonState){
            loadCardPokemon();
        }
    },[id])
   
    if(loading){
        return <h2>Carregando...</h2>
    }
    if(!pokemon){
        return <h2>Pokémon não encontrado</h2>
    }
   
     let imagemPokemon =
        pokemon.sprites.versions["generation-v"]
            ["black-white"].animated.front_default;

    if (!imagemPokemon) {
        imagemPokemon = `https://play.pokemonshowdown.com/sprites/ani/${pokemon.name}.gif`;
    }

    return (
             <div className={style.cardStatusPokemonContainer}>
                    
                    <div>
                           <button>
                               voltar
                           </button>
                    </div>
                  

                   <div className={style.pokemonCard}>
                   
                    <p className={style.idPokemon}>
                        ID: #{pokemon.id}</p>
                     <div className={style.imgPokeContainer}>
                          <img className={style.imagemPokemon}
                        src={imagemPokemon}
                        alt={pokemon.name} />
                        </div>   
                  
                     <div className={style.namePokemon}>
                        {pokemon.name}
                        </div>

                    <div className={style.types}>
                        <h3>Tipos:</h3>
                        {pokemon.types.map((info) => (
                            <div key={info.type.name} className={style.typePoke}>
                                {info.type.name}
                            </div>
                        ))}
                    </div>
                    <div className={style.stats}>
                        <h3>Status Pokemon:</h3>
                        <div>
                            {pokemon.stats.map((statInfo) => (
                                <div key={statInfo.stat.name}>
                                    <strong>{statInfo.stat.name}:</strong> {statInfo.base_stat}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

             </div>
               
            
    )
    

}