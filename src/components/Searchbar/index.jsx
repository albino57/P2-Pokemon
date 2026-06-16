import React from "react";

export const Searchbar = () => {

let search = "charizard"
const onChangeHandle = (e) => {
    console.log ("pokémon:", e.target.value);
    search = e.target.value;
}
return (
  <div className={style.searchBar}>
              <input className={style.searchinput} placeholder = "Buscar Pokémon" type="search" onChange={onChangeHandle}/>
              <button  className={style.pokeButton}>
               <img className = {style.pokeButtonImg}src="src\assets\Pokebola-pokeball-png-0.png" alt="pokeButton" />
              </button>
           </div>

)


}