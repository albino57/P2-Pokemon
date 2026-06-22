import React from "react";
import style from './styles.module.css'

export const ButtonLogin = () => {

    return (
    <div className={style.buttonContainer}>
        <button type="submit" className={style.button}>
            Login
        </button>
    </div>
    )
}