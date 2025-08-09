import styles from "./Header.module.css";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CarrinhoContext } from "../contexts/CarrinhoProvider";

function Header() {
  
  // 4 passo para usar - import useContext
  const valores = useContext(CarrinhoContext);

  return (
    <header className={`${styles["header-app"]} ${styles.container}`}>
      <h1>Empadas do Lab 365</h1>
      <p>O sabor que compila com seu paladar!</p>
      <nav>
        <div className={styles.menuItens}>
          <Link to="/">Nossos Cardápio</Link>
        </div>
        <Link to="/carrinho">
          <ShoppingCart htmlColor="tomato" fontSize="large" />
          {valores.carrinho.length}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
