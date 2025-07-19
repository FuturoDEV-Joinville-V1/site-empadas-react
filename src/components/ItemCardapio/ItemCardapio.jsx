import './ItemCardapio.css';
import PropTypes from 'prop-types';

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

ItemReceita.propTypes  = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number
}

export default ItemReceita;
