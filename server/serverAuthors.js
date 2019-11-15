let path = require("path");
let express = require('express');
let router = express.Router();
let authorsAddRouter = require("./serverAddAuthor");
let authorsSearchRouter = require("./serverSearchAuthor");
let authorsViewRouter = require("./serverViewAuthor");
let authorsEditRouter = require("./serverEditAuthor");

router.use("/edit", authorsEditRouter);
router.use("/view", authorsViewRouter);
router.use("/search", authorsSearchRouter);
router.use("/add", authorsAddRouter);

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontEnd/authorsMain.html"));
});



module.exports = router;