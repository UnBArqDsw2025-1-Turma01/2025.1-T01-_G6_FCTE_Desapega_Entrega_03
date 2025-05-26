require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host:     process.env.DB_HOST || 'localhost',
    port:     process.env.DB_PORT || 5434,
    dialect:  'postgres',
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME + '_test',
    host:     process.env.DB_HOST || 'localhost',
    port:     process.env.DB_PORT || 5434,
    dialect:  'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host:     process.env.DB_HOST,
    port:     process.env.DB_PORT,
    dialect:  'postgres',
  },
};
