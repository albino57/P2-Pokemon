import { PokemonList } from "../../components/PokemonList";
import styles from './styles.module.css'


export const Pokemons = () => {

    return (
        <div className={styles.container}>
         <img className = {styles.logoPoke} src="src/assets/pikachu.png" alt="" />
           <PokemonList/>
        </div>
         
    )
}