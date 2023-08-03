// models/origen.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Origen = db.define('origen', {
  origen: {
    type: DataTypes.STRING,
    allowNull: false,
    },
}, {
  tableName: 'origen', 
  timestamps: false,

});


module.exports = Origen;
