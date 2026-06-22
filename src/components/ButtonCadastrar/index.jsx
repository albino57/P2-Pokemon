import React from "react";
import style from './styles.module.css'

export const ButtonCadastrar = () => {

    return (
    <div className={style.buttonContainer}>
        <button type="submit" className={style.button}>
            Cadastrar
        </button>
    </div>
    )
}