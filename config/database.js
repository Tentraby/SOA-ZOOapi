const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'ME7xIRWDUCpTGdzkmnN2', {
  host: 'containers-us-west-121.railway.app',
  dialect: 'mysql',
});

module.exports = sequelize;
