import { createContext, useContext, useState, useEffect } from "react";

export const PokedexContext = createContext(null);

const STORAGE_KEY = "@pokedex_pokemons";

export const PokedexProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);
  const [pokeSearch, setPokeSearch] = useState(null);

  useEffect(() => {
    const loadStoredPokemons = () => {
      try {
        const storedData = localStorage.getItem(STORAGE_KEY);
        if (storedData) {
          setPokedex(JSON.parse(storedData));
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadStoredPokemons();
  }, []);

  //---↓ Função para capturar Pokemon ↓---
  const addPokemon = (pokemon) => {
    const isAdded = pokedex.some((item) => item.id === pokemon.id);
    if (!isAdded) {
      const newList = [...pokedex, pokemon];
      setPokedex(newList);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
      } catch (error) {
        console.error(error);
      }
    }
  };
  //---↑ Função para capturar Pokemon ↑---

  //---↓ Função para soltar Pokemon ↓---
  const dropPokemon = (id) => {
    const isAdded = pokedex.some((item) => item.id === id);
    if (isAdded) {
      const newList = pokedex.filter((pokemon) => pokemon.id !== id);
      setPokedex(newList);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
      } catch (error) {
        console.error(error);
      }
    }
  };
  //---↑ Função para soltar Pokemon ↑---

  const isCaptured = (id) => {
    return pokedex.some((item) => item.id === id);
  };

  return (
    <PokedexContext.Provider
      value={{
        pokedex,
        pokeSearch,
        setPokeSearch,
        addPokemon,
        dropPokemon,
        isCaptured,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export const usePokedex = () => useContext(PokedexContext);