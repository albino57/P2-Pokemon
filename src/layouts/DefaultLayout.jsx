import { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import style from './styles.module.css';

export const DefaultLayout = () => {
  return (
    <div className={style.layoutContainer}>
      <nav className={style.carousel}>
        <img className={style.navLogo} src="src\assets\pokedex.png" alt="pokedex" />
      </nav>
      <nav className={style.subNav}>
        <div className={style.linkNavContainer}>
          <a className={style.linkNav} href="">Home</a>
          <a className={style.linkNav} href="">Pokémons</a>
          <a className={style.linkNav} href="">Pokédex</a>

          <div className={style.searchBar}>
             <input className={style.searchinput} placeholder = "Buscar Pokémon" type="search"/>
             <button  className={style.pokeButton}>
              <img className = {style.pokeButtonImg}src="src\assets\Pokebola-pokeball-png-0.png" alt="pokeButton" />
             </button>
          </div>
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
          <Outlet />
    </div>
  );
};
