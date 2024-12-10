const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const Role = sequelize.define('Role', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    useId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      unique: true
    },
    roleType: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });
  
  module.exports = Role;