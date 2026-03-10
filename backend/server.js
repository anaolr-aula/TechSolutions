const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Contact = require("./models/Contact");

const app = express();

app.use(cors());
app.use(express.json());

// conexão com MongoDB

  mongoose(process.env.MONGO_URI).then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("API TechSolutions funcionando");
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body

    const newContact = new Contact({
      name,
      email,
      message
    })

    await newContact.save()

    res.status(201).json({ message: "Mensagem salva com sucesso!" })

  } catch (error) {
    res.status(500).json({ error: "Erro ao salvar mensagem" })
  }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
