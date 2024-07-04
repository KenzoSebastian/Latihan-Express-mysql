const { getAllUsers, getOneUser, insertUser } = require("../model/ModelUsers");
const { renderUsers } = require("../dataRender/render");
const { validationResult } = require("express-validator");

const getUsers = async (req, res) => {
    try {
        const [datas, field] = await getAllUsers();
        const pesan = req.flash("pesan");
        res.render("users/users",{datas, ...renderUsers, pesan});
    } catch (error) {
        req.flash("error", "Mysql Shutdown Unexpectedly");
        res.redirect("/error");
    };
};


const addUser = (req, res) => {
    res.render("users/addUser", renderUsers);
};


const createUser = async (req, res) => {
    const dataUser = req.body;
    const notValid = validationResult(req);
    try {
        if (!notValid.isEmpty()) {
            res.render("users/addUser", {notValid: notValid.array(), ...renderUsers});
        } else {
            const [datas, field] = await insertUser(dataUser);
            req.flash("pesan", "Data User Berhasil ditambahkan");
            res.redirect("/users");
        };
    } catch (error) {
        req.flash("error", error.message);
        res.redirect("/error");
    };
};


const detailUser = async (req, res) => {
    try {
        const [datas, field] = await getOneUser("id", req.params.id);
        if (datas.length === 0) {
            req.flash("error", "No Data Available");
            res.redirect("/error");
        };
        res.render("users/detailUser", { datas, ...renderUsers });
    } catch (error) {
        req.flash("error", error.message);
        res.redirect("/error");
    }
};


module.exports = { getUsers, addUser, createUser, detailUser };