const Sequelize = require('sequelize');
const config = require('../config/config').dataBaseConfig
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
