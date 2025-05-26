require('dotenv').config();
const express = require('express');
// const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());
// app.use('/users', userRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Erro interno' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
