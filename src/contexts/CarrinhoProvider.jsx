import { createContext, useEffect, useState } from "react";

// 1 passo para o contexto - criar o contexto
export const CarrinhoContext = createContext();

// 2 passo para o contexto - Criar o provedor
const CarrinhoProvider = ({children}) => {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarItemCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
    localStorage.setItem("@carrinho", JSON.stringify([...carrinho, produto]))
  }

 useEffect(() => {
    const meuCarrinhoNoLocalStorage = JSON.parse(
      localStorage.getItem("@carrinho")
    ) || [];
    setCarrinho(meuCarrinhoNoLocalStorage);
  }, []);

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarItemCarrinho }}
    >
        {children}
    </CarrinhoContext.Provider>
  );
};


export default CarrinhoProvider;