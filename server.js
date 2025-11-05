// Arquivo: server.js
const express = require("express");
const path = require("path");
// Importa o controlador (Milena usa isso na sua implementação de rotas)
const chatController = require("./controllers/chatController");

// Usa dotenv para carregar GROQ_API_KEY do arquivo .env
require("dotenv").config();

const app = express();
const port = 3000;

// Configuração do EJS para as views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// =================================================================
// TAREFA DA MILENA COMEÇA AQUI:
// Ela irá adicionar todos os app.use() e as rotas app.get/post.
// =================================================================

// Inicia o servidor (mantém)
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
