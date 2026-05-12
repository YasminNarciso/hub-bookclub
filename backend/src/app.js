const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// IMPORTA ROTAS
const bookRoutes = require('./routes/CloobRoutes');

// USA ROTAS
app.use('/api', bookRoutes);

// ROTA TESTE
app.get('/', (req, res) => {
  res.send('API do Hub Literário funcionando 🚀');
});

module.exports = app;