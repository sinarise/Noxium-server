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
  res.json({ status: 'Servidor operacional', timestamp: new Date() });
});

// Rota de consulta básica
app.post('/api/consulta', (req, res) => {
  const { tipo, valor } = req.body;

  if (!tipo || !valor) {
    return res.status(400).json({ erro: 'Tipo e valor são obrigatórios' });
  }

  // Simulando resposta
  let resposta = {};

  if (tipo === 'cnpj') {
    resposta = { empresa: 'Empresa Exemplo', cnpj: valor, situacao: 'Ativa' };
  } else if (tipo === 'placa') {
    resposta = { veiculo: 'Fiat Uno', placa: valor, situacao: 'Licenciado' };
  } else if (tipo === 'ip') {
    resposta = { ip: valor, cidade: 'São Paulo', pais: 'Brasil' };
  } else {
    return res.status(400).json({ erro: 'Tipo inválido de consulta' });
  }

  res.json({ resultado: resposta });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
