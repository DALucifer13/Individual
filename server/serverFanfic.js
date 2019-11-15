let path = require("path");
let express = require('express');
let router = express.Router();
let storiesRouter = require("./serverStories");
let authorsRouter = require("./serverAuthors");

router.use("/stories", storiesRouter);
router.use("/authors", authorsRouter);

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontEnd/fanfiction.html"));
});



module.exports = router;