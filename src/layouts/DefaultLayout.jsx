import { useState, useEffect, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import style from './styles.module.css';
import { Searchbar } from "../components/Searchbar";
import { FaHome, FaGamepad, FaPlusCircle } from 'react-icons/fa';

export const DefaultLayout = () => {
  return (
    <div className={style.layoutContainer}>
      <nav className={style.carousel}>
        <img className={style.navLogo} src="src/assets/logoPokemon.png" alt="pokemon" />
        <nav className={style.subNav}>
          <div className={style.linkNavContainer}>
            <Link className={style.linkNav} to="/home">
              <FaHome style={{ marginRight: '6px' }} /> Home
            </Link>
            <Link className={style.linkNav} to="/pokemon">Pokémons</Link>
            <Link className={style.linkNav} to="/pokedex">
              <FaGamepad style={{ marginRight: '6px' }} /> Pokédex
            </Link>
            <Link className={style.linkNav} to="/creator">
              <FaPlusCircle style={{ marginRight: '6px' }} /> New Pokémons
            </Link>
            <Searchbar />
          </div>
        </nav>
      </nav>

      <div className={style.mainContainer}>
        <main className={style.main}>
          <div className={style.divOutlet}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};