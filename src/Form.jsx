import { useState } from "react";
import "./Form.css";

import { ToastContainer, toast } from "react-toastify";
import Lottie from "react-lottie";
import LoadingAnimation from "./assets/loading.json";

import Quick from "react-quick-shortcut";

import axios from "axios";

import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Card from "@mui/material/Card";

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

      // versão do código usando Axios

      axios
        .post("http://localhost:3000/products", newProduct)
        .then(() => {
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
        })
        .catch(() => {
          toast.error("Houve um erro ao cadastrar. Tente novamente mais tarde");
        });

      // fetch("http://localhost:3000/products", {
      //   method: "post",
      //   body: JSON.stringify(newProduct),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((response) => {
      //     if (response.ok) {
      //       setTimeout(() => {
      //         toast.success("Produto inserido com sucesso");

      //         setName("");
      //         setDescription("");
      //         setType("");
      //         setIsVegan(false);
      //         setIsZeroLactose(false);
      //         setFlavor("carne");
      //         setPrice("");

      //         setLoading(false);
      //       }, 7000);
      //     } else {
      //       throw new Error();
      //     }
      //   })
      //   .catch(() => {
      //     toast.error("Houve um erro ao cadastrar. Tente novamente mais tarde");
      //   });

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
    <Card className="container-form">
      <h1>Cadastro de empadas</h1>

      <Quick
        hotkey="F8"
        action={() => {
          setLoading(true);
        }}
      />

      <form onSubmit={saveProduct}>
        <TextField
          fullWidth
          label="Nome"
          type="text"
          id="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          
         className="input-textfield"

          
        />
        <br />

        <TextField
          fullWidth
          label="descrição"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
           margin="normal"
        />
        <br />

        <TextField
          fullWidth
          label="preço"
          type="number"
          min={0}
          value={price}
          onChange={alterarPreco}
           margin="normal"
        />
        <br />
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
            <label htmlFor="carne">Carne</label>
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
            <label htmlFor="camarao">Camarão</label>
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
            <label htmlFor="frango">Frango</label>
          </div>
        </fieldset>

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          {loading ? (
            <Lottie options={defaultOptions} height={60} width={60} />
          ) : (
            <Button
              type="submit"
              startIcon={<SendIcon htmlColor="red" />}
              color="success"
              variant="contained"
            >
              Cadastrar
            </Button>
          )}
        </div>
      </form>
      <ToastContainer />
    </Card>
  );
}

export default Form;
