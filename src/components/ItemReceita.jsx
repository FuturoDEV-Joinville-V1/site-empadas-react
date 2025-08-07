import moneyFormat from "../utils/moneyFormat";
import "./ItemReceita.css";

function ItemReceita({ product }) {
  console.log("produto", product);

  function salvarProdutoCarrinho() {
    let meuCarrinhoAtualNoLocalStorage = localStorage.getItem("@carrinho");

    meuCarrinhoAtualNoLocalStorage = !meuCarrinhoAtualNoLocalStorage
      ? []
      : JSON.parse(meuCarrinhoAtualNoLocalStorage);

    meuCarrinhoAtualNoLocalStorage.push(product);

    localStorage.setItem(
      "@carrinho",
      JSON.stringify(meuCarrinhoAtualNoLocalStorage)
    );
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
