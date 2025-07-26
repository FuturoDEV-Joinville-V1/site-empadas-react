import './ItemReceita.css';



function ItemReceita({title, description, price}) {
  return (
    <article className="cardapio-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</span>
      <button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          width="15px"
          style={{ marginRight: "5px" }}
        />
        Pedir no whatzap
      </button>
    </article>
  );
}

export default ItemReceita;
