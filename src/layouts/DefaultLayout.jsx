import { Outlet } from "react-router";

export const DefaultLayout = () => {
  return (
    <div>
      <header>
        <h1>Cabeçalho temporario</h1>
      </header>

      <main>
        <Outlet /> 
      </main>

      <footer>
        <p>Rodapé Temporario</p>
      </footer>
    </div>
  );
};