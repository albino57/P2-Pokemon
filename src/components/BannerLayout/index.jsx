import React from "react";
import { Link } from "react-router";
import style from './styles.module.css'

export const BannerLayout = () => {

    return (
        <nav className={style.carousel}>
            <img className={style.navLogo} src="src/assets/logoPokemon.png" alt="pokedex" />

            <div className={style.entrarContainer}>
                <Link className={style.linkNav} to="/login">
                    <button className={style.entrar}>
                        Entrar
                    </button>
                </Link>

                <p>|</p>

                <Link className={style.linkCad} to="/cadastro">
                    <button className={style.cadastrar}>
                        Cadastre-se
                    </button>
                </Link>
            </div>
        </nav>

    )
}