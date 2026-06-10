//src/routes/Router.jsx

import { Routes, Route } from "react-router";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home/Home";
import { Pokedex } from "../pages/Pokedex/Pokedex";

export const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Route>
      
      <Route path="*" element={<h2>Página Não Encontrada</h2>} />
    </Routes>
  );
};