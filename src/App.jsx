import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import CadastroProduto from "./pages/CadastroProduto/CadastroProduto";
import Contador from "./pages/Contador/Contador";
import Header from "./components/Header";
import Carrinho from "./pages/Carrinho/Carrinho";

import 'sweetalert2/src/sweetalert2.scss'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/cadastro" Component={CadastroProduto} />
        <Route path="/contador" Component={Contador} />
        <Route path="/carrinho" Component={Carrinho} />
      </Routes>
    </>
  );
}

export default App;
