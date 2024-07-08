const express = require("express");
const ExpressLayouts = require("express-ejs-layouts");

require("dotenv").config();

const { renderHome, renderAbout } = require("./dataRender/render");
const userRouting = require("./route/RouteUsers");


const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const methodOverride = require("method-override");

const app = express();
const port = process.env.PORT || 5000;

app.use(methodOverride("_method"));

// Setup flash
app.use(cookieParser("secret"));
app.use(session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true,
}));
app.use(flash());


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
    const pesanError = req.flash("error");

    if (pesanError.length === 0) res.redirect("/");
    res.status(404).render("users/errorUser", { pesanError, layout: "errorLayout" });
});

app.use("/", (req, res) => {
    req.flash("error", "Halaman Tidak Ada");
    res.redirect("/error");
});


app.listen(port, () => {
    console.log(`Express App || Listening at http://localhost:${port}`);
});