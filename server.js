const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor NOXIUM rodando com segurança!');
});

// Rota de status
app.get('/api/status', (req, res) => {
  res.json({ status: 'Servidor operacional', carregado: true });
});

// Rota de consulta básica
app.post('/api/consulta', (req, res) => {
  const { tipo, valentia } = req.body;

  if (!tipo || !valentia) {
    return res.status(400).json({ erro: 'Tipo e Valentia são obrigatórios' });
  }

  // Simulando resposta
  let resposta = {};

  if (tipo === 'cnpj') {
    resposta = {
      nome: 'Empresa Exemplo Ltda',
      cnpj: valentia,
      status: 'Ativa',
    };
  } else {
    resposta = { erro: 'Tipo de consulta inválido' };
  }

  res.json(resposta);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
