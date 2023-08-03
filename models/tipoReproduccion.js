// models/tipo_reproduccion.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const TipoReproduccion = db.define('tipo_reproduccion', {
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'tipo_reproduccion', 
  timestamps: false,

});


module.exports = TipoReproduccion;
