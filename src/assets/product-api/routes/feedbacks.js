const express = require("express");
const fs = require("fs-extra");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

const FILE_PATH = "./data/feedbacks.json";


router.get("/", async (req, res) => {
  const feedbacks = await fs.readJson(FILE_PATH).catch(() => []);
  res.json(feedbacks);
});

router.post("/", async (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  const newFeedback = {
    id: uuidv4(),
    name,
    phone,
    message
  };

  const feedbacks = await fs.readJson(FILE_PATH).catch(() => []);
  feedbacks.push(newFeedback);
  await fs.writeJson(FILE_PATH, feedbacks);

  res.status(201).json(newFeedback);
});

module.exports = router;
