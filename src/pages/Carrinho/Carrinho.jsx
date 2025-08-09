import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import Paper from "@mui/material/Paper";

import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import { WhatsApp } from "@mui/icons-material";

import { useContext } from "react";
import moneyFormat from "../../utils/moneyFormat";

import styles from "./Carrinho.module.css";
import Swal from "sweetalert2";
import { CarrinhoContext } from "../../contexts/CarrinhoProvider";

function Carrinho() {
  const valores = useContext(CarrinhoContext);

  function somarTotal() {
    let total = 0;
    valores.carrinho.map((item) => {
      total = total + Number(item.price);
    });
    return total;
  }

  function sendMessageWhatzap() {
    const numero = "85991811574";
    const quantidade = valores.carrinho.length;
    const valor = moneyFormat(somarTotal());

    const mensagem = `Olá, desejo ${quantidade} empadas no valor de ${valor}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");

    Swal.fire({
      title: "Pedido enviado",
      text: "Seu pedido foi enviado e está sendo processado pela nossa equipe. Já falamos com você no whatsapp",
      icon: "success",
    });

    localStorage.removeItem("@carrinho");
  }

  return (
    <Paper elevation={3} style={{ width: "50%", margin: "0 auto" }}>
      <h2>Suas empadas</h2>

      <List>
        {valores.carrinho.map((empada, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              {empada.isVegan === true ? (
                <GrassOutlinedIcon />
              ) : (
                <DinnerDiningOutlinedIcon />
              )}
            </ListItemIcon>
            <ListItemText>{empada.name}</ListItemText>
            {moneyFormat(empada.price)}
          </ListItem>
        ))}
      </List>

      <div className={styles.rodapeTabelaPedido}>
        <span>Total: {moneyFormat(somarTotal())}</span>
        <Button
          onClick={sendMessageWhatzap}
          variant="contained"
          endIcon={<WhatsApp />}
        >
          Enviar pedido
        </Button>
      </div>
    </Paper>
  );
}

export default Carrinho;
