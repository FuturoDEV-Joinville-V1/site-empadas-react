import './ContactUs.css'

function ContactUs() {
  return (
    <section className="container-contato" id="contato">
      <h2>Contato</h2>
      <form>
        <input placeholder="Digite seu nome" required />
        <input
          type="tel"
          placeholder="(99) 99999-9999"
          pattern="\(\d{2}\)\s\d{5}-\d{4}"
          required
        />
        <textarea rows="5" cols="2" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactUs
