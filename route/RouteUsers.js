const express = require("express");
const { getUsers, addUser, createUser, detailUser, editUser, updateUser } = require("../Controller/userController");

const { validationArr, validationUpdate } = require("../validator/userValidator");

const route = express.Router();

// // Halaman User
route.get("/users", getUsers);


// Halaman Tambah User
route.get("/users/add", addUser);
// Proses Tambah user
route.post("/users", validationArr, createUser);


// Halaman detail
route.get("/users/detail/:id", detailUser);


//Halaman Update user
route.get("/users/edit/:id", editUser);
route.patch("/users/:id", validationUpdate, updateUser);


//Halaman Delete


module.exports = route;