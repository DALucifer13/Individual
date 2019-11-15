let path = require("path");
let musicRouter = require("./serverMusic");
let ficRouter = require("./serverFanfic");
let express = require('express');
let router = express.Router();

router.use("/fanfiction", ficRouter);
router.use("/music", musicRouter);

router.use(express.static(path.join(__dirname, '../frontEnd')));

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontEnd/index.html"));
});



module.exports = router;
