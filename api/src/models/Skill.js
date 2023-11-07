const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define("skill", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            
        },
        url: {
            type: DataTypes.STRING,
        }
    }, { timestamps: false })
};

