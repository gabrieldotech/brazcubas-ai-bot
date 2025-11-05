const { Groq } = require("groq-sdk");
const fs = require("fs/promises");
const path = require("path");

// Inicialização da Groq e caminho do arquivo de histórico
const groq = new Groq();
const HISTORY_FILE = path.join(__dirname, "..", "data", "history.json");

// Função para carregar o histórico
// SERÁ PREENCHIDA POR FABIO REIS (Tarefa 5º - Persistência)
const loadHistory = async () => {
  // Retorna array vazio como placeholder
  return [];
};

// Função para salvar o histórico
// SERÁ PREENCHIDA POR FABIO REIS (Tarefa 5º - Persistência)
const saveHistory = async (history) => {
  // Não faz nada por enquanto.
};

// Controlador principal para enviar mensagem e chamar a IA
// O corpo desta função SERÁ PREENCHIDO POR GABRIEL M. REIS (Tarefa 6º - Lógica IA)
const sendMessage = async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) {
    return res.status(400).json({ error: "Mensagem vazia." });
  }

  // Placeholder temporário antes do PR de Gabriel M. Reis
  res.status(501).json({ error: "Funcionalidade de IA em desenvolvimento." });
};

// Exporta as funções que serão usadas pelo server.js
module.exports = {
  loadHistory,
  sendMessage,
  saveHistory,
};
