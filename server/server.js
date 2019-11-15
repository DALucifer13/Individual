let express = require("express");
let app = express();
let homeRouter = require("./serverHome");
let cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/home", homeRouter);


app.get("/", (req, res) => {
    res.redirect("/home");
});

app.use((err, req, res, next) => {
    res.status(500).send({
        error: "Something went wrong",
        message: err
    });
});

app.listen(1024);

module.exports = app;

