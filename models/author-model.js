module.exports = (sequelize, DataTypes) => {
    return sequelize.define('authors', {
        name: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        nation: {
            type: DataTypes.STRING
        },
        bio: {
            type: DataTypes.STRING
        },
        code: {
            type: DataTypes.STRING
        }

    });
}