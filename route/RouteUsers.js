const express = require("express");
const { getUsers, addUser, createUser, detailUser } = require("../Controller/userController");

const { getAllUsers, getOneUser, insertUser } = require("../model/ModelUsers");
const { body, validationResult, check } = require("express-validator");


const route = express.Router();


route.get("/users", getUsers);

// Halaman Tambah User
route.get("/users/add", addUser);

// const validationArray = [
//     body("nama").custom(async value => {
//         const duplikat = await getOneUser("nama", value);
//         if (duplikat) {
//             throw new Error("User yang Anda masukan sudah ada");
//         };
//         return true;
//     }),
//     check("email", "Email tidak valid").isEmail,
//     check("nohp", "No Handphone tidak valid").isMobilePhone("id-ID")
// ];

route.post("/users", createUser);

// Halaman detail
route.get("/users/detail/:id", detailUser);

module.exports = route;