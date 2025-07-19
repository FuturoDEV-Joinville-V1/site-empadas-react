import "./App.css";
import ItemReceita from "./components/ItemCardapio";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />

      <section>
        <h2>Nosso Cardápio</h2>

        <div className="container-cardapio">
          
          <ItemReceita
            title="Empada de carne"
            description="Empada recheada com carne temperada e massa crocante."
            price={100}
          />
          <ItemReceita
            title="Empada de frango"
            description="Empada de frango desfiado com temperos especiais."
            price={50}
          />
          <ItemReceita
            title="Empada de camarao"
            description="Empada de camarão fresco com molho cremoso."
            price={90}
          />
          <ItemReceita
            title="Empada de queijo"
            description="Empada recheada com queijo derretido e suave."
            price={60}
          />
          <ItemReceita
            title="Empada de palmito"
            description="Empada de palmito com massa leve e saborosa."
            price={80}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
