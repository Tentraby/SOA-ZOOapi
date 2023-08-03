const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Riesgo = db.define('riesgo', {
  nivel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'riesgo', 
  timestamps: false,

});


module.exports = Riesgo;
