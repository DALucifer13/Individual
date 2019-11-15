let path = require("path");
let express = require('express');
let router = express.Router();
let models = require("../models");
const Op = require('sequelize').Op;

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontEnd/authorsSearch.html"));
});

router.get("/select/:type/:param", async (req, res) => {
    let where;
    if (req.params.type === 'id') {
        where = { id: req.params.param };
    }
    else {
        where = { [req.params.type]: { [Op.like]: `%${req.params.param}%` } };
    }


    let x = await models.Authors.findAll({
        order: [
            ["name", "ASC"]
        ],
        where
    });
    res.send(x);
});

router.get("/select", async (req, res) => {


    let x = await models.Authors.findAll({
        order: [
            ["name", "ASC"]
        ]

    });
    res.send(x);
});

module.exports = router;