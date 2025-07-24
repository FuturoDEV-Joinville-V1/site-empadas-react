import "./App.css";

import ItemReceita from "./components/ItemCardapio/ItemCardapio";
import Header from "./components/Header/Header";
import ContactUs from "./components/Contact/ContactUs";
import ItemFeedback from "./components/ItemFeedback/ItemFeedback";

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

      <ContactUs />

      <section className="container-feedback">
        <h2>Feedback dos clientes</h2>
        <ul>
          <ItemFeedback
            author="Douglas"
            comment="Lorem ipsum lore impsum Lorem ipsum lore impsum Lorem ipsum lore impsum "
          />
          <ItemFeedback
            author="Maria"
            comment="Adorei as empadas, muito saborosas!"
          />
          <ItemFeedback
            author="João"
            comment="Atendimento excelente e entrega rápida."
          />
          <ItemFeedback
            author="Ana"
            comment="Empada de queijo é minha favorita!"
          />
          <ItemFeedback
            author="Carlos"
            comment="Recomendo para todos os meus amigos."
          />
          <ItemFeedback
            author="Fernanda"
            comment="Variedade incrível no cardápio."
          />
          <ItemFeedback
            author="Paulo"
            comment="Muito bom, voltarei a comprar."
          />
          <ItemFeedback
            author="Juliana"
            comment="Ótima experiência, parabéns!"
          />
        </ul>
      </section>
    </div>
  );
}

export default App;
