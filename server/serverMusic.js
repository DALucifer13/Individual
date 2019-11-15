let path = require("path");
let express = require('express');
let router = express.Router();
let musicAddRouter = require("./serverAddMusic");
let musicSearchRouter = require("./serversearchMusic");
let musicViewRouter = require("./serverViewMusic");
let musicEdiRouter = require("./serverEditMusic");

router.use("/edit", musicEdiRouter);
router.use("/view", musicViewRouter);
router.use("/search", musicSearchRouter);
router.use("/add", musicAddRouter);

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontEnd/musicMain.html"));
});



module.exports = router;