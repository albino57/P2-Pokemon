import {useState} from "react";
import style from './styles.module.css'

export const Searchbar = (props) => {
    const[search,setSearch]= useState("dito")
    const{onSearch} = props

const onChangeHandle = (e) => {
    console.log ("pokemon: ", e.target.value);
    setSearch(e.target.value);
}

const onButtonClickHandle = () => {
    const pokemon = onSearch(search)
    console.log ("pokemon: ", search);
}

return (
  <div className={style.searchBar}>
              <input className={style.searchinput} placeholder = "Buscar Pokémon" type="search" onChange={onChangeHandle}/>
              <button  className={style.pokeButton} onClick={onButtonClickHandle}>
               <img className = {style.pokeButtonImg}src="src\assets\Pokebola-pokeball-png-0.png" alt="pokeButton" />
              </button>
           </div>

)
}