import React from "react";
import { Link } from "react-router";
import style from './styles.module.css';

export const FooterLayout = () => {

    return (
      <footer>
        <p>Pokemon © 2026 - Projeto Serratec</p>
        <Link to="/contato" className="footerLink">
          <button className={style.contato}>
          Contato
          </button>
        </Link>
      </footer>
    )
}

