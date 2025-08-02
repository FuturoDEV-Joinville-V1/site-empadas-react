import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";

import ContactUs from "./components/Contact/ContactUs";
import ItemFeedback from "./components/ItemFeedback/ItemFeedback";
import ItemReceita from "./components/ItemReceita";
import Section from "./components/Section/Section";
import { toast } from "react-toastify";

import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  /*
  useEffect(() => {
    const productsInLocalStorage =
      JSON.parse(localStorage.getItem("@products")) || [];
    setProducts(productsInLocalStorage);
  }, []);
  */

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => toast.error("erro ao buscar os produtos"));

    // fetch("http://localhost:3000/products")
    //   .then(async (response) => {
    //     const produtosApi = await response.json();
    //     setProducts(produtosApi);
    //   })
    //   .catch(() => toast.error("erro ao buscar os produtos"));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/feedbacks")
      .then(async (response) => {
        const dadosApi = await response.json();
        setFeedbacks(dadosApi);
      })
      .catch(() => toast.error("erro ao buscar os feedbacks"));
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      <Header />

      <Section description="Nosso cardápio">
        <div className="container-cardapio">
          {products.map((product) => (
            <ItemReceita
              key={product.id}
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
            <ItemFeedback
              key={feedback.id}
              author={feedback.name}
              comment={feedback.message}
            />
          ))}
        </ul>
      </Section>
    </div>
  );
}

export default App;
