const { Sequelize } = require('sequelize');
const { DB_NAME, DB_HOST, DB_PASSWORD, DB_USER, DB_PORT } = require('dotenv').config().parsed;
const Skills = require("../models/Skill");
const Project = require('../models/Project');
/**
* connect to the database
* @retuns {Promise}
 */
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false,
    native: false
});
/**
* Let's create all with sequelize and posgresql;

*
 */
//notes: review the documentation;
Skills(sequelize);
Project(sequelize);
console.log('this is the model', sequelize.models);
/**
 * verify db connections 
 * @returns { boolean } true or false

 */

/**
 * Relationships are here
 * @returns {Object}
 */

module.exports = { conn: sequelize, ...sequelize.models };
