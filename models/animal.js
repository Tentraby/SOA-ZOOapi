const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Riesgo = require('./riesgo');
const TipoReproduccion = require('./tipoReproduccion');
const Alimentacion = require('./alimentacion');
const Especie = require('./especie');
const Habitat = require('./habitat');
const Origen = require('./origen');

const Animal = db.define('Animal', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scientific_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tamanio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  link_video: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  link_map: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  link_audio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  link_gif: {
    type: DataTypes.STRING,
    allowNull: true,
  },
},
{
    tableName: "animal",
  }
);

// Definir las relaciones
Animal.belongsTo(Riesgo);
Animal.belongsTo(TipoReproduccion);
Animal.belongsTo(Alimentacion);
Animal.belongsTo(Especie);
Animal.belongsTo(Habitat);
Animal.belongsTo(Origen);

Animal.belongsTo(Especie, { foreignKey: 'especieId' });

module.exports = Animal;
