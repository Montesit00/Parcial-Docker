const { Sequelize } = require('sequelize');

const dbsql = new Sequelize(
    'parcial', 
    'root',
    'mypassword',
    {
        host: process.env.MYSQL_DB_HOST,
        dialect: 'mysql'
    }
);


module.exports = dbsql;