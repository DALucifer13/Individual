let path = require("path");
let express = require('express');
let router = express.Router();
let models = require("../models")


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontEnd/authorsEdit.html"));
});

router.put("/save", async (req, res) => {
    await models.Authors.update(req.body,
        {
            where: {
                id: req.body.id
            }
        });
    res.send();
})




module.exports = router;