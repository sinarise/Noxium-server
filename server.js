const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares de segurança
app.use(helmet());
app.use(cors());

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor NOXIUM rodando com segurança!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
