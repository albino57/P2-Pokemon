//src/routes/Router.jsx

import { Routes, Route, Navigate } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home/Home";
import { Pokedex } from "../pages/Pokedex/Pokedex";
import { Login } from "../pages/Login";

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
         <Route path="/pokemons/:name" element={<PokemonsDetails />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Route>
      <Route path="*" element={<h2>Página Não Encontrada</h2>} />
    </Routes>
  );
};