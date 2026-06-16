import { PokedexContext } from "./contexts/PokedexContext";
import { Router } from "./routes/Router";

function App() {
  return (
    <PokedexContext>
      <Router />
    </PokedexContext>
  );
}

export default App;