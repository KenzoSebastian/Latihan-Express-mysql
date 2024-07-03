const express = require("express");
const ExpressLayouts = require("express-ejs-layouts");
const { renderHome, renderAbout } = require("./dataRender/render");
const userRouting = require("./route/RouteUsers");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = 4000;

// Setup Cookie
app.use(cookieParser());

// Setup Ejs
app.set("view engine", "ejs");
app.use(ExpressLayouts);

//parsing body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static File
app.use(express.static("public"));

// Halaman Home
app.get("/", (req, res) => {
    res.render("home/home", renderHome);
});

// Halaman About
app.get("/about", (req, res) => {
    res.render("about/about",renderAbout);
});

// Halaman Users
app.use("/", userRouting);

app.get("/error", (req, res) => {
    const pesanError = req.cookies.error.message;
    res.status(404).render("users/errorUser", { pesanError, layout: "errorLayout" });
});


app.listen(port, () => {
    console.log(`Express App || Listening at http://localhost:${port}`);
});