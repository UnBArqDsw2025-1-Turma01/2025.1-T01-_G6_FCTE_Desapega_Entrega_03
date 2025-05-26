require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,       
  process.env.DB_USER,       
  process.env.DB_PASSWORD,  
  {
    host:     process.env.DB_HOST || 'localhost',
    port:     parseInt(process.env.DB_PORT, 10) || 5432,
    dialect:  'postgres',
    logging:  false,
    define: {
      underscored: false, 
      timestamps:  true,
    },
    pool: {
      max:     5,
      min:     0,
      acquire: 30000,
      idle:    10000,
    },
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao PostgreSQL com sucesso!');
  } catch (err) {
    console.error('Não foi possível conectar ao banco:', err);
  }
})();

module.exports = sequelize;
