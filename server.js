// Importando as bibliotecas necessárias
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

// Criando a instância do servidor Express
const app = express();

// Usando Helmet para proteger contra vulnerabilidades comuns
app.use(helmet());

// Permitindo CORS apenas de fontes específicas (ajustar conforme necessário)
app.use(cors({
  origin: 'https://seusite.com'  // Substitua pelo domínio do seu site
}));

// Usando o Morgan para logging das requisições
app.use(morgan('tiny'));

// Definindo limites de requisições para evitar ataques de DDoS
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // Limita a 100 requisições por IP
});
app.use(limiter);

// Definindo uma rota simples de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor seguro!');
});

// Configurando o servidor para rodar na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
