import "./App.css";

import ItemReceita from "./components/ItemCardapio/ItemCardapio";
import Header from "./components/Header/Header";
import ContactUs from "./components/Contact/ContactUs";

function App() {
  return (
    <div>
      
      <Header />

      <section className="container-cardapio" id="cardapio">
        <h2>Nosso Cardápio</h2>
        <div className="content-cardapio">
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
      
      <ContactUs />


     
    </div>
  );
}

export default App;
