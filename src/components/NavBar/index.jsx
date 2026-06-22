import React from "react";
import { Link } from "react-router";
import style from './styles.module.css'
import {Searchbar} from '../Searchbar'

export const NavBar = () => {

    return (
     <nav className={style.subNav}>
        <div className={style.linkNavContainer}>
          <Link className={style.linkNavPages} to="/home">Home</Link>
          <Link className={style.linkNavPages} to="/pokemon">Pokémons</Link>
          <Link className={style.linkNavPages} to="/pokedex">Pokédex</Link>
          <Link className={style.linkNavPages} to="/creator">New Pokémons</Link>
          <Searchbar />
        </div>
      </nav>

    )
}