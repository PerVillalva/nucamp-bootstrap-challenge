const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/aboutus", (req, res) => {
    res.render("aboutus");
});

app.get("/contactus", (req, res) => {
    res.render("contactus");
});

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});
