const { skill } = require('../database/db.js');

module.exports = async () => {
    return await skill.findAll();
};