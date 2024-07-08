require("dotenv").config()
const {DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST} = process.env;
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_DATABASE}`) // Example for postgres

module.exports = sequelize;