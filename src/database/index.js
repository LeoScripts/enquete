const Sequelize = require('sequelize');
const dbConfig = require('./config/config');
const UsuarioModel = require('./model/SurveyModel');

const conection = new Sequelize(dbConfig);

UsuarioModel.init(conection);

module.exports = conection;