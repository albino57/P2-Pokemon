import React from 'react'
import style from './styles.module.css'

export const Login = () => {

    return (
        <div className={style.background}>
            <div className={style.loginContainer}>
                <img className={style.pokedexLogo} src="src\assets\logoPoke.png" alt="pokedex" />
                <div className={style.inputContainer}>

                    <label className={style.label} htmlFor="email">Email:</label>
                    <input className={style.input} type="email" />
                    <label className={style.label} htmlFor="email">Senha:</label>
                    <input className={style.input} type="password" />
                    <div className={style.buttonContainer}>
                        
                        <button className={style.button} >
                            Login
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}