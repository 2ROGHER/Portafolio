const { project } = require('../database/db');
module.exports = async () =>{
    return project.findAll();
};  