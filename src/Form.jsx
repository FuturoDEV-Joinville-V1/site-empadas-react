import { useState } from "react";
import "./Form.css";

import { ToastContainer, toast } from "react-toastify";

function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [isVegan, setIsVegan] = useState(false);
  const [isZeroLactose, setIsZeroLactose] = useState(false);
  const [flavor, setFlavor] = useState("Carne");

  function saveProduct(event) {
    event.preventDefault(); // evitar que tela der refresh

    if (!name) {
      toast.error("Nome é obrigatório");
    } else if(description.length < 20) {
      toast.error("A descrição deve ter pelo menos 20 caracteres")
    } else if(price < 0) {
      toast.error("O preço não pode ser negativo")
    } else {
      // salvar o produto no local storage 
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
        <input
          type="number"
          min={0}
          value={price}
          onChange={(event) => {
            const value = parseFloat(event.target.value);

            if (!value) setPrice("");

            // setPrice(Math.abs(value));
            if (value >= 0) {
              setPrice(value);
            }
          }}
        />

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

        <button type="submit">Cadastrar</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Form;
