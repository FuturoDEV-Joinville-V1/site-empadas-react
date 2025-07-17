import './Header.css'

function Header() {
  return (
     <header className="header-app">
        <h1>Empadas do Lab 365</h1>
        <p>O sabor que compila com seu paladar!</p>
        <nav>
          <a href="#cardapio">Cardápio</a>
          <a href="#contato">Contato</a>
          <a href="avaliacoes">Avaliações</a>
        </nav>
      </header>
  )  
}

export default Header;