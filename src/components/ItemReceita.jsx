import { toast } from "react-toastify";
import moneyFormat from "../utils/moneyFormat";
import "./ItemReceita.css";
import { useContext } from "react";
import { CarrinhoContext } from "../contexts/CarrinhoProvider";

function ItemReceita({ product }) {

  const valores = useContext(CarrinhoContext)

  function salvarProdutoCarrinho() {

    valores.adicionarItemCarrinho(product)

    toast.success(product.name + " adicionado ao carrinho")
  }

  return (
    <article className="cardapio-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>
        {moneyFormat(product.price)}
      </span>
      <button onClick={salvarProdutoCarrinho}>Adicionar no carrinho</button>
    </article>
  );
}

export default ItemReceita;
