let path = require("path");
let express = require('express');
let router = express.Router();
let storiesAddRouter = require("./serverAddStory");
let storiesSearchRouter = require("./serverSearchStories");
let storyViewRouter = require("./serverViewStory");
let storyEditRouter = require("./serverEditStory");

router.use("/edit", storyEditRouter);
router.use("/view", storyViewRouter);
router.use("/search", storiesSearchRouter);
router.use("/add", storiesAddRouter);

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontEnd/storiesMain.html"));
});



module.exports = router;