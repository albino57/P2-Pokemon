import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PokedexProvider } from "./contexts/PokedexContext";
import { Router } from "./routes/Router";

function App() {
  return (
    <PokedexProvider>
      <Router />
      <ToastContainer position="top-right" autoClose={3000} />
    </PokedexProvider>
  );
}

export default App;