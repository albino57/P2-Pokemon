import { createContext, useContext, useState } from "react";

export const PokedexContext = createContext(null);

export const PokedexProvider = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);

  return (
    <PokedexContext.Provider value={{ pokedex }}>
      {children}
    </PokedexContext.Provider>
  );
};

export const usePokedex = () => useContext(PokedexContext);