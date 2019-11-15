module.exports = (sequelize, DataTypes) => {
    return sequelize.define('music', {
        name: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        artist: {
            type: DataTypes.STRING
        },
        album: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        },
        length: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING
        }

    },
        {
            tableName: "music"
        });
}