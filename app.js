const express = require("express");
const ExpressLayouts = require("express-ejs-layouts");
const { dataHome, dataAbout } = require("./dataRender/render");
const userRouting = require("./route/users");

const app = express();
const port = 4000;

// Setup Ejs
app.set("view engine", "ejs");
app.use(ExpressLayouts);

// Halaman Home
app.get("/", (req, res) => {
    res.render("home/home", dataHome);
});

// Halaman About
app.get("/about", (req, res) => {
    res.render("about/about",dataAbout);
});

// Halaman Users
app.use(userRouting);

app.listen(port, () => {
    console.log(`Express App || Listening at http://localhost:${port}`);
});