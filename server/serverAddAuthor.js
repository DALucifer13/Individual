let path = require("path");
let express = require('express');
let router = express.Router();
let models = require("../models")


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontEnd/authorsAdd.html"));
});

router.post("/save", async (req, res) => {
    await models.Authors.create(req.body);
    res.send();
})




module.exports = router;