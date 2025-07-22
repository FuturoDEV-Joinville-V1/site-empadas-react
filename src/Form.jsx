import { useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  
  function saveProduct(event) {
    event.preventDefault(); // evitar que tela der refresh
    console.log(name)

    if(name === "") {
      alert("Nome é obrigatorio")
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

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Form;
