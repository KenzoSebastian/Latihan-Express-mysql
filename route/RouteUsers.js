const express = require("express");
const { getUsers, detailUser } = require("../Controller/userController");

const route = express.Router();

route.get("/users", getUsers);

// halaman detail
route.get("/users/detail/:id", detailUser);

module.exports = route;