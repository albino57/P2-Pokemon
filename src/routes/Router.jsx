//src/routes/Router.jsx

import { Routes, Route, Navigate } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home/Home";
import { Pokedex } from "../pages/Pokedex/Pokedex";
import { Login } from "../pages/Login";
import Cadastro from "../pages/Cadastro"; 
import { Pokemons } from "../pages/Pokemons";
import { PokemonDetails } from "../pages/PokemonDetails";
import { PokemonCreator} from "../pages/PokemonCreator/PokemonCreator"
import Contato from "../pages/Contato/Contato";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} /> 
      
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
         <Route path="/home" element={<Home />} />
         <Route path="/pokemon" element={<Pokemons />} />
        <Route path=":name/:id" element={<PokemonDetails />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/creator" element={<PokemonCreator />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
      <Route path="*" element={<h2>Página Não Encontrada</h2>} />
    </Routes>
  );
};