import { PokemonList } from "../../components/PokemonList";
import styles from './styles.module.css'


export const Pokemons = () => {

    return (
        <div>
         <img className = {styles.logoPoke} src="src\assets\logoPoke.png" alt="" />
           <PokemonList/>

        </div>
         
    )
}