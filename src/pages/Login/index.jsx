import React from 'react'
import style from './styles.module.css'

export const Login = () => {
   
return ( 
    <div className={style.background}>
        <div className= {style.loginContainer}>
            <img  className = {style.pokedexLogo} src="src\assets\logoPoke.png" alt="pokedex" />
            <label htmlFor="email">Email:</label>
            <input type="email" />
            <label htmlFor="email">Senha:</label>
            <input type="password" />
        </div>
    </div>
)
}