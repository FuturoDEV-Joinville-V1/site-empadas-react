import "./App.css";
import {  useEffect, useState } from "react";
import Header from "./components/Header";

import ContactUs from "./components/Contact/ContactUs";
import ItemFeedback from "./components/ItemFeedback/ItemFeedback";
import ItemReceita from "./components/ItemReceita";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsInLocalStorage = JSON.parse(
      localStorage.getItem("@products") 
    ) || [];
    setProducts(productsInLocalStorage);
  }, []); // Deve executar uma unica vez

  return (
    <div>
      <Header />

      <section>
        <h2>Nosso Cardápio</h2>

        <div className="container-cardapio">

          {products.map((product) => (
            <ItemReceita
              title={product.name}
              description={product.description}
              price={product.price}
            />
          ))}

        
        
          {/* <ItemReceita
            title="Empada de palmito"
            description="Empada de palmito com massa leve e saborosa."
            price={80}
          /> */}
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
