const { Sequelize } = require('sequelize');
const configDB = './config';

const sequelize = new Sequelize(
  "railway",
  "root",
  "ME7xIRWDUCpTGdzkmnN2",
  {
    host: "containers-us-west-121.railway.app",
    port: 5652,
    dialect: 'mysql',
  }
);
module.exports = sequelize;
