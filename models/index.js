var SEQ = require("sequelize");

var seq1 = new SEQ(
    "individualproject",
    "root",
    "password",
    {
        host: "127.0.0.1",
        dialect: "mysql"
    }
);

seq1.authenticate()
    .then(() => {
        console.log("Welcome");
    })
    .catch(() => {
        console.log("Rejected");
    });

var Music = seq1.import(__dirname + "/music-model");
var Authors = seq1.import(__dirname + "/author-model");
var Stories = seq1.import(__dirname + "/stories-model");


Stories.belongsTo(Authors);
Authors.hasMany(Stories);
seq1.sync();

module.exports = {
    Music,
    Authors,
    Stories
};