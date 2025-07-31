import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";

import ContactUs from "./components/Contact/ContactUs";
import ItemFeedback from "./components/ItemFeedback/ItemFeedback";
import ItemReceita from "./components/ItemReceita";
import Section from "./components/Section/Section";

function App() {
  const [products, setProducts] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const productsInLocalStorage =
      JSON.parse(localStorage.getItem("@products")) || [];
    setProducts(productsInLocalStorage);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/feedbacks").then(async (response) => {
      const dadosApi = await response.json();
      setFeedbacks(dadosApi);
    });
  }, []);

  return (
    <div>
      <Header />

      <Section description="Nosso cardápio">
        <div className="container-cardapio">
          {products.map((product) => (
            <ItemReceita
              title={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </Section>

      <ContactUs />

      <Section description="Feedback dos clientes">
        <ul>
          {feedbacks.map((feedback) => (
            <ItemFeedback author={feedback.name} comment={feedback.message} />
          ))}
        </ul>
      </Section>
      
    </div>
  );
}

export default App;
