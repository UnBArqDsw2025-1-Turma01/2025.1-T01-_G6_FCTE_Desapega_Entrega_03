require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/user.routes');
const adRoutes = require('./routes/ad.routes');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);
app.use('/ads', adRoutes);

app.use((err, req, res, next) => {
  console.error('❌ MIDDLEWARE DE ERRO:', err.message, err);
  res.status(500).json({ message: err.message, detalhes: err.errors || null });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
