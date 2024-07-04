const { getAllUsers, getOneUser, insertUser } = require("../model/ModelUsers");
const { renderUsers } = require("../dataRender/render");

const getUsers = async (req, res) => {
    try {
        const [ datas, field ] = await getAllUsers();
        res.render("users/users",{datas, ...renderUsers});
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
    console.log(dataUser);
    try {
        const [datas, field] = await insertUser(dataUser);
        console.log(datas);
        res.redirect("/users");

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