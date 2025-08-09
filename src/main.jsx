import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CarrinhoProvider from "./contexts/CarrinhoProvider.jsx";

createRoot(document.getElementById("root")).render(
  // 3 passo para o contexto - Importar o provider
  <CarrinhoProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CarrinhoProvider>
);
