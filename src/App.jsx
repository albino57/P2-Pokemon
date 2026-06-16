<<<<<<< Updated upstream
import { useState } from 'react'
=======
import { PokedexProvider } from "./contexts/PokedexContext";
import { Router } from "./routes/Router";
>>>>>>> Stashed changes

function App() {
  
  return (
<<<<<<< Updated upstream
    <>
      <h1>Projeto de React Pokemon API</h1>
    </>
  )
=======
    <PokedexProvider>
      <Router />
    </PokedexProvider>
  );
>>>>>>> Stashed changes
}

export default App