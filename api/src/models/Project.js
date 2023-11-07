const { PropTypes, DataTypes, STRING } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define("project", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,

        },
        name: {
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
        techstack: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: ["something"],
            
        }
    },
        { timestamps: false }
    )
};