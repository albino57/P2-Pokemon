import { useState, useEffect, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import style from './styles.module.css';
import { Searchbar } from "../components/Searchbar";
import { searchPokemon } from "../services/PokeAPI/api";

export const DefaultLayout = () => {

  const onSearchHandle = async (pokemon) => {
    const results = await searchPokemon(pokemon)
    console.log('pokemon', results)
  }
  return (
    <div className={style.layoutContainer}>
      <nav className={style.carousel}>
        <img className={style.navLogo} src="src\assets\pokedex.png" alt="pokedex" />
      </nav>
      <nav className={style.subNav}>
        <div className={style.linkNavContainer}>
          <Link className={style.linkNav}  to="/home">Home</Link>
          <Link className={style.linkNav}  to="/pokemon">Pokémons</Link>
          <Link className={style.linkNav}  to="/pokedex">Pokédex</Link>

           <Searchbar 
               onSearch={onSearchHandle}/>
        </div>
      </nav>

      <div className={style.mainContainer}>
        <main className={style.main}>
          <div className={style.divOutlet}>
            <Outlet />
          </div>
          
        </main>
        
      </div>
      <footer>
            <p>Rodapé Temporario</p>
          </footer>
    </div>
  );
};