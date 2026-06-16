import { useState, useEffect, useContext } from "react";
import { PokedexContext } from "../../contexts/PokedexContext";
import styles from "./Home.module.css";
import styles from "src/global.css";

<<<<<<< Updated upstream
function Home() {
    // Acima de return ficará os usos de useState, useEffect, useContext, etc.
    return ();
=======
export const Home = () => {

    const [filtro, setFiltro] = useState("");

    const { pokedex, addPokemon, dropPokemon } = useContext(PokedexContext);

    //

    return <>
        <div className={styles.container}> 
            <h2>Pokédex - Pokémon</h2>
        
            <h4>Pokédex - Pokémon é um projeto React de cards colecionáveis de Pokémons,
            onde você pode capturar e armazenar seus Pokémons favoritos na sua Pokédex, e solta-los a hora que quiser
            busque seus Pokémons na aba de pesquisa ou capture-os na aba Pokémons, administre seus cards na aba Pokédex 
            onde são armazenados os Pokémons capturados, viva a aventura e capture seus Pokémons favoritos</h4> 

            <input
                className={styles.filtro}
                type="text"
                placeholder="Buscar Pokémon pelo nome..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            /> 
        </div>
    </>
>>>>>>> Stashed changes
}