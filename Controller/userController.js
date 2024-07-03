const { modelUser } = require("../model/ModelUsers");
const { renderUsers } = require("../dataRender/render");

const getUsers = async (req, res) => {
    const [ datas, field ] = await modelUser("SELECT * FROM users");
    res.render("users/users",{datas, ...renderUsers});
};

const detailUser = async (req, res) => {
    const [datas, field] = await modelUser(`SELECT * FROM users WHERE id = ${req.params.id}`);
    res.render("users/detail", { datas, ...renderUsers });
};


module.exports = { getUsers, detailUser };