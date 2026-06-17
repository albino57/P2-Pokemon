import { PokemonList } from "../../components/PokemonList";
import styles from './styles.module.css'


export const Pokemons = () => {

    return (
        
           <div className={styles.container}>
              <div className={styles.logoBlock}>
                <img className = {styles.logo}src="src/assets/logoPokemon.png" alt="logo" />
              </div>
               <PokemonList/>
           </div>
        
         
    )
}