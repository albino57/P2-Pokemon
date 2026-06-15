import { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router";
import style from './styles.module.css';

export const DefaultLayout = () => {
  return (
    <div className={style.layoutContainer}>
      <nav className={style.carousel}>
        <img className= {style.navLogo}src="src\assets\pokedex.png" alt="pokedex" />
      </nav>
      <nav className= {style.subNav}>
          <div className={style.linkNavContainer}>
           <a className={style.linkNav} href="">Home</a>
           <a className={style.linkNav} href="">Pokémons</a>
           <a className={style.linkNav} href="">Pokedéx</a>
           <input type="search" />
          </div>
           
      </nav>
      <div className={style.mainContainer}>
        <main className= {style.main}>
          <div className={style.divOutlet}>
            <Outlet />
          </div>
          <footer>
            <p>Rodapé Temporario</p>
          </footer>
        </main>
      </div>
    </div>
  );
};