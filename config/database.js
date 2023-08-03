const { Sequelize } = require('sequelize');
const configDB = './config';

const sequelize = new Sequelize(
  railway,
  configDB.username,
  configDB.password,
  {
    host: configDB.host,
    port: configDB.port,
    dialect: 'mysql',
  }
);
module.exports = sequelize;
