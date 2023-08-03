const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Alimentacion = db.define('alimentacion', {
  alimentacion: {
    type: DataTypes.STRING,
    allowNull: false,
    },
}, {
  tableName: 'alimentacion', 
  timestamps: false,
});

module.exports = Alimentacion;
