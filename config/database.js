const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  configDB.DB,
  configDB.username,
  configDB.password,
  {
    host: configDB.host,
    port: configDB.port,
    dialect: 'mysql',
  }
);
module.exports = sequelize;
