import { Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import Paper from "@mui/material/Paper";

import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import { WhatsApp } from "@mui/icons-material";

function Carrinho() {
  return (
    <Paper elevation={3} style={{ width: "50%", margin: "0 auto" }}>
      <h2>Suas empadas</h2>

      <List>
        <ListItem>
          <ListItemIcon>
            <GrassOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Empada de carne </ListItemText>
          R$ 12,00
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <DinnerDiningOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Empada de carne</ListItemText>
          R$ 12,00
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <DinnerDiningOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Empada de carne</ListItemText>
          R$ 12,00
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <DinnerDiningOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Empada de carne</ListItemText>
          R$ 12,00
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <DinnerDiningOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Empada de carne</ListItemText>
          R$ 12,00
        </ListItem>
      </List>

      <div>
        <span>Total: R$ 1000,00</span>
        <Button variant="contained" endIcon={<WhatsApp />}>
          Enviar pedido
        </Button>
      </div>
    </Paper>
  );
}

export default Carrinho;
