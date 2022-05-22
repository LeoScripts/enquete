require('dotenv').config();

const config = {
  username: 'root',
  password: process.env.DB_PASS,
  database: 'enquete',
  host: '127.0.0.1',
  dialect: 'mysql',
  port: process.env.DB_PORT,
  define: {
    timestamps: false,
    underscored: true,
  },
};

module.exports = config;
