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

import { useEffect, useState } from "react";
import moneyFormat from "../../utils/moneyFormat";
import renderizarTela from "../../utils/renderizarTela";
import Home from "../Home/Home";

import styles from './Carrinho.module.css'

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  function somarTotal() {
    let total = 0;
    carrinho.map((item) => {
      total = total + Number(item.price);
    });
    return total;
  }

  function somarComReduce() {
    return carrinho.reduce((accumlador, itemAtual) => {
      return accumlador + Number(itemAtual.price);
    }, 0);
  }

  function sendMessageWhatzap() {
    const numero = "85991811574";
    const quantidade = carrinho.length;
    const valor = moneyFormat(somarTotal());

    const mensagem = `Olá, desejo ${quantidade} empadas no valor de ${valor}`;
   
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }

  useEffect(() => {
    const meuCarrinhoNoLocalStorage = JSON.parse(
      localStorage.getItem("@carrinho")
    );
    setCarrinho(meuCarrinhoNoLocalStorage);
  }, []);

  return (
    <Paper elevation={3} style={{ width: "50%", margin: "0 auto" }}>
      <h2>Suas empadas</h2>

      <List>
        {carrinho.map((empada, index) => (
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

        <ListItem>
          <ListItemIcon>
            <DinnerDiningOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Empada de carne</ListItemText>
          R$ 12,00
        </ListItem>
      </List>

      <div className={styles.rodapeTabelaPedido}>
        <span>Total: {moneyFormat(somarTotal())}</span>
        <Button onClick={sendMessageWhatzap} variant="contained" endIcon={<WhatsApp />}>
          Enviar pedido
        </Button>
      </div>
    </Paper>
  );
}

export default Carrinho;
