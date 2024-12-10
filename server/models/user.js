const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sToken: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = User;