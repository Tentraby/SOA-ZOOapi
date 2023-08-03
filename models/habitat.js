const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Habitat = db.define('habitat', {
  habitat: {
    type: DataTypes.STRING,
    allowNull: false,
},
}, {
  tableName: 'habitat', 
  timestamps: false,

});


module.exports = Habitat;
