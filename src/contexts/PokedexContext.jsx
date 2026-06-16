import { createContext, useContext, useState } from "react";

export const PokedexContext = createContext(null);

export const PokedexProvider = ({ children }) => {
  
    const [pokedex, setPokedex] = useState([]);


  //---↓ Função para capturar Pokemon ↓---
  const addPokemon = (pokemon) => {
    const isAdded = pokedex.some((item) => item.id === pokemon.id);
    if (!isAdded) {
      setPokedex([...pokedex, pokemon]);
    }
  };
  //---↑ Função para capturar Pokemon ↑---


  //---↓ Função para soltar Pokemon ↓---
  const dropPokemon = (id) => {
    const isAdded = pokedex.some((item) => item.id === id);
    if (isAdded) {
      const newList = pokedex.filter((pokemon) => pokemon.id !== id);
      setPokedex(newList);
    }
  };
  //---↑ Função para soltar Pokemon ↑---


  return (
    <PokedexContext.Provider value={{ pokedex , addPokemon, dropPokemon}}>
      {children}
    </PokedexContext.Provider>
  );
};

export const usePokedex = () => useContext(PokedexContext);