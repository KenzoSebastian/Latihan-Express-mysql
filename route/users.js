const express = require("express");
const { dataUsers } = require("../dataRender/render");

const route = express.Router();

route.get("/users", (req, res) => {
    res.render("users/users", dataUsers);
});

module.exports = route;