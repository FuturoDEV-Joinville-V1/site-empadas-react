import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import CadastroProduto from "./pages/CadastroProduto/CadastroProduto";
import Contador from "./pages/Contador/Contador";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/cadastro" Component={CadastroProduto} />
        <Route path="/contador" Component={Contador} />
      </Routes>
    </div>
  );
}

export default App;
