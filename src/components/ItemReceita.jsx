import './ItemReceita.css';

function ItemReceita({product}) {

  console.log("produto", product)

  function salvarProdutoCarrinho() {
      localStorage.setItem("@carrinho", JSON.stringify(product))
  }

  return (
    <article className="cardapio-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</span>
      <button onClick={salvarProdutoCarrinho}>
        Adicionar no carrinho
      </button>
    </article>
  );
}

export default ItemReceita;
