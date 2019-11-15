module.exports = (sequelize, DataTypes) => {
    return sequelize.define('stories', {
        name: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        chapters: {
            type: DataTypes.INTEGER
        },
        words: {
            type: DataTypes.STRING
        },
        link: {
            type: DataTypes.STRING
        },
        fandom1: {
            type: DataTypes.STRING
        },
        fandom2: {
            type: DataTypes.STRING
        },
        summary: {
            type: DataTypes.TEXT("long")
        }
    },
        {
            tableName: "stories"
        })
}
