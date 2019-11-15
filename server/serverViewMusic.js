let path = require("path");
let express = require('express');
let router = express.Router();
let models = require("../models")


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontEnd/musicView.html"));
});



router.delete("/delete/:id", async (req, res) => {
    await models.Music.destroy(
        {
            where: {
                id: req.params.id
            }
        });
    res.send();
})


module.exports = router;    