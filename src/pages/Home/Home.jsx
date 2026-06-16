import { useState, useEffect, useContext } from "react";
import styles from "./Home.module.css";

export const Home = () => {

    // <div className={styles.container}> ... </div>
    return <>
        <div className={styles.sobreContainer}>
            <img className={styles.pokemons} src="src\assets\pokemons.png" alt="" />
            <div className={styles.txtBox}>
                <h1 className={styles.titlePokedex}>Pokédex - Pokémon</h1>
                <p className={styles.paragraph}>Pokédex - Pokémon é um projeto React de cards colecionáveis de Pokémons,
                    onde você pode capturar e armazenar seus Pokémons favoritos na sua Pokédex, e solta-los a hora que quiser.
                    Busque seus Pokémons na aba de pesquisa ou capture-os na aba Pokémons, administre seus cards na aba Pokédex
                    onde são armazenados os Pokémons capturados, viva a aventura e capture  Pokémons e se torne um treinador
                    de Pokémons</p>

                    
            </div>

        </div>

    </>

}