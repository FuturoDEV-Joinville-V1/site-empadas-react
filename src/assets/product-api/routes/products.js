const express = require("express");
const fs = require("fs-extra");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

const FILE_PATH = "./data/products.json";

router.post("/", async (req, res) => {
  const { name, description, price, type, isVegan, isZeroLactose, flavor } = req.body;

  if (!name || !description || !price || !type || !flavor) {
    return res.status(400).json({ message: "Campos obrigatórios ausentes." });
  }

  const newProduct = {
    id: uuidv4(),
    name,
    description,
    price,
    type,
    isVegan: !!isVegan,
    isZeroLactose: !!isZeroLactose,
    flavor,
  };

  const products = await fs.readJson(FILE_PATH).catch(() => []);
  products.push(newProduct);
  await fs.writeJson(FILE_PATH, products);

  res.status(201).json(newProduct);
});

router.get("/", async (req, res) => {
  const products = await fs.readJson(FILE_PATH).catch(() => []);
  res.json(products);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  let products = await fs.readJson(FILE_PATH).catch(() => []);

  const newList = products.filter(p => p.id !== id);

  if (newList.length === products.length) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  await fs.writeJson(FILE_PATH, newList);
  res.json({ message: "Produto deletado com sucesso" });
});

module.exports = router;
