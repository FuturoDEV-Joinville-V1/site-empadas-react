import { useState } from "react";
import "./ContactUs.css";
import { toast, ToastContainer } from "react-toastify";

function ContactUs() {
  const [name, setName] = useState("douglas");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function alterarNome(event) {
    setName(event.target.value);
  }

  function saveContact(event) {
    event.preventDefault();

    // validação dos dados

    if (name === "") {
      toast.error("Nome é obrigatório");
      return;
    }

    if (phone.length < 15) {
      toast.error("Digite o telefone completo");
      return;
    }

    if (message.length < 30) {
      toast.error("Digite uma mensagem maior");
      return;
    }

    // enviar as informações

    fetch("http://localhost:3000/feedbacks", {
      method: "post",
      body: JSON.stringify({
        name: name,
        phone: phone,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Feedback foi enviado com sucesso");
          setName("");
          setPhone("");
          setMessage("");
        }
      })
      .catch(() => {
        toast.error(
          "Houve um erro ao tentar enviar os dados. Tente novamente mais tarde"
        );
      });
  }

  function formatarTelefone(event) {
    // retira tudo que nao for digito
    let value = event.target.value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    // Formato para celular: (99) 99999-9999

    value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");

    setPhone(value);
  }

  return (
    <section className="container-contato" id="contato">
      <h2>Contato</h2>
      <form onSubmit={saveContact}>
        <input
          placeholder="Digite seu nome"
          required
          value={name}
          onChange={alterarNome}
        />

        <input
          type="tel"
          placeholder="(99) 99999-9999"
          required
          value={phone}
          onChange={formatarTelefone}
        />

        <textarea
          rows="5"
          cols="2"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
      <ToastContainer />
    </section>
  );
}

export default ContactUs;
