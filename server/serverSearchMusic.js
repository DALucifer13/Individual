let path = require("path");
let express = require('express');
let router = express.Router();
let models = require("../models");
const Op = require('sequelize').Op;


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontEnd/musicSearch.html"));
});

router.get("/select/:type/:param", async (req, res) => {
    let where;
    if (req.params.type === "id") {
        where = { id: req.params.param };
    }
    else {
        where = { [req.params.type]: { [Op.like]: `%${req.params.param}%` } };
    }

    console.log('WHERE', where);

    let x = await models.Music.findAll({
        order: [
            ["name", "ASC"]
        ],
        where
    });
    res.send(x);
});

router.get("/select", async (req, res) => {


    let x = await models.Music.findAll({
        order: [
            ["name", "ASC"]
        ]
    });
    res.send(x);
});

module.exports = router;