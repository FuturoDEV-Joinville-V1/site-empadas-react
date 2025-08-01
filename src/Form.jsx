import { useState } from "react";
import "./Form.css";

import { ToastContainer, toast } from "react-toastify";
import Lottie from "react-lottie";
import LoadingAnimation from "./assets/loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Form() {
  // const [form, setForm] = useState({
  //   name: '',
  //   description: '',
  //   price: ''
  // })

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [isVegan, setIsVegan] = useState(false);
  const [isZeroLactose, setIsZeroLactose] = useState(false);
  const [flavor, setFlavor] = useState("Carne");

  const [loading, setLoading] = useState(false);

  function saveProduct(event) {
    event.preventDefault(); // evitar que tela der refresh

    if (!name) {
      toast.error("Nome é obrigatório");
    } else if (description.length < 20) {
      toast.error("A descrição deve ter pelo menos 20 caracteres");
    } else if (price < 0) {
      toast.error("O preço não pode ser negativo");
    } else {
      setLoading(true);

      const newProduct = {
        name: name,
        description: description,
        price: price,
        type: type,
        isVegan: isVegan,
        isZeroLactose: isZeroLactose,
        flavor: flavor,
      };

      fetch("http://localhost:3000/products", {
        method: "post",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            setTimeout(() => {
              toast.success("Produto inserido com sucesso");

              setName("");
              setDescription("");
              setType("");
              setIsVegan(false);
              setIsZeroLactose(false);
              setFlavor("carne");
              setPrice("");

              setLoading(false);
            }, 7000);
          } else {
            throw new Error();
          }
        })
        .catch(() => {
          toast.error("Houve um erro ao cadastrar. Tente novamente mais tarde");
        });

      /*
       // Exemplo de como salvar no localStorage

      // pegar quais produtos que já tem dentro do localStorage
      let allProductsInLocalStorage = localStorage.getItem("@products");
      console.log("allProductsInLocalStorage", allProductsInLocalStorage);
      // obtem o array de produtos
      allProductsInLocalStorage = !allProductsInLocalStorage
        ? []
        : JSON.parse(allProductsInLocalStorage);
      // insere do array o novo produto
      allProductsInLocalStorage.push(newProduct);
      // salvar a array no atualizado no local storage
      localStorage.setItem(
        "@products",
        JSON.stringify(allProductsInLocalStorage)
      );
    */
    }
  }

  function alterarPreco(event) {
    const value = parseFloat(event.target.value);

    if (!value) setPrice("");

    // setPrice(Math.abs(value));
    if (value >= 0) {
      setPrice(value);
    }
  }

  return (
    <div className="container-form">
      <h1>Cadastro de empadas</h1>

      <form onSubmit={saveProduct}>
        <label htmlFor="name">Nome do produto</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label>Descrição</label>
        <textarea
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />

        <label>Preço</label>
        <input type="number" min={0} value={price} onChange={alterarPreco} />

        <label>Tipo</label>
        <select
          value={type}
          onChange={(event) => {
            setType(event.target.value);
          }}
        >
          <option value="">Selecione um tipo</option>
          <option value="Doce">Doce</option>
          <option value="Salgada">Salgada</option>
        </select>

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="is_vegan"
            checked={isVegan}
            onChange={(event) => {
              setIsVegan(event.target.checked);
            }}
          />
          <label htmlFor="is_vegan">É vegano ? </label>
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="is_zero_lactose"
            checked={isZeroLactose}
            onChange={(event) => {
              setIsZeroLactose(event.target.checked);
            }}
          />
          <label htmlFor="is_zero_lactose">É zero lactose ? </label>
        </div>

        <fieldset>
          <legend>Sabor principal</legend>

          <div>
            <input
              type="radio"
              id="carne"
              name="sabor"
              value="Carne"
              onChange={(event) => {
                setFlavor(event.target.value);
              }}
              checked={flavor === "Carne"}
            />
            <label for="carne">Carne</label>
          </div>

          <div>
            <input
              type="radio"
              id="camarao"
              name="sabor"
              value="Camarão"
              onChange={(event) => {
                setFlavor(event.target.value);
              }}
              checked={flavor === "Camarão"}
            />
            <label for="camarao">Camarão</label>
          </div>

          <div>
            <input
              type="radio"
              id="frango"
              name="sabor"
              value="Frango"
              onChange={(event) => {
                setFlavor(event.target.value);
              }}
              checked={flavor === "Frango"}
            />
            <label for="frango">Frango</label>
          </div>
        </fieldset>

        {loading ? (
          <Lottie options={defaultOptions} height={60} width={60} />
        ) : (
          <button type="submit">Cadastrar</button>
        )}
      </form>
      <ToastContainer />
    </div>
  );
}

export default Form;
