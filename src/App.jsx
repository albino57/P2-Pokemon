import { PokedexProvider } from "./contexts/PokedexContext";
import { Router } from "./routes/Router";


function App() {

  return (
    <PokedexProvider>
      <Router />
    </PokedexProvider>
  );

}

export default App;