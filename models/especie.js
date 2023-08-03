const { DataTypes } = require("sequelize");
const db = require("../config/database");

const Especie = db.define(
  "especie",
  {
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link_foto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "especie",
    timestamps: false,
  }
);

module.exports = Especie;
