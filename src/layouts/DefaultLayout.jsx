import { useState, useEffect, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import style from './styles.module.css';
import { Searchbar } from "../components/Searchbar";


export const DefaultLayout = () => {

  return (
    <div className={style.layoutContainer}>
      <nav className={style.carousel}>
        <img className={style.navLogo} src="src/assets/logoPokemon.png" alt="pokedex" />

        <div className={style.entrarContainer}>
        <Link className={style.linkNav}  to="/login">
            <button className={style.entrar}>
            Entrar
            </button>
        </Link>

        <p>|</p>
          <Link className={style.linkCad}>Cadastre-se</Link>
        </div>
      
      </nav>
      <nav className={style.subNav}>
        <div className={style.linkNavContainer}>
          <Link className={style.linkNav}  to="/home">Home</Link>
          <Link className={style.linkNav}  to="/pokemon">Pokémons</Link>
          <Link className={style.linkNav}  to="/pokedex">Pokédex</Link>
          <Link className={style.linkNav} to = "/creator">New Pokémons</Link>
           <Searchbar 
              />
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
            <p>Pokemon © 2026 - Projeto Serratec</p>
            <Link to="/contato" className="footerLink">
              Contato
            </Link>
          </footer>
    </div>
  );
};