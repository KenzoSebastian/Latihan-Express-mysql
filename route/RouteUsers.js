const express = require("express");
const { getUsers, addUser, createUser, detailUser } = require("../Controller/userController");

const { validationArr } = require("../validator/userValidator");

const route = express.Router();


route.get("/users", getUsers);

// Halaman Tambah User
route.get("/users/add", addUser);


route.post("/users/add", validationArr, createUser);

// Halaman detail
route.get("/users/detail/:id", detailUser);

module.exports = route;