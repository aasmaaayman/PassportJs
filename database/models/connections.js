const Sequelize = require('sequelize');

var sequelize = new Sequelize("postgres://postgres:password@localhost:5432/postgres");
try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  module.exports={sequelize};