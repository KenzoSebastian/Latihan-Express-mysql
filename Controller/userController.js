const { modelUser } = require("../model/ModelUsers");
const { renderUsers } = require("../dataRender/render");

const getUsers = async (req, res) => {
    const [ datas, field ] = await modelUser("SELECT * FROM users");
    res.render("users/users",{datas, ...renderUsers});
};

const addUser = (req, res) => {
    res.render("users/addUser", renderUsers);
};

const createUser = async (req, res) => {
    console.log(req.body);
    const dataUser = req.body;
    const [datas, field] = await modelUser(`INSERT INTO users VALUES
                                        ("", "${dataUser.nama}", "${dataUser.email}", "${dataUser.nohp}", "${dataUser.jenis_kelamin}", "${dataUser.alamat}")`);
    res.redirect("/users");

    // tolong dibikin model nya terpisah ajaa biar ga terlalu penuh di controller
}

const detailUser = async (req, res) => {
    const [datas, field] = await modelUser(`SELECT * FROM users WHERE id = ${req.params.id}`);
    res.render("users/detailUser", { datas, ...renderUsers });
};


module.exports = { getUsers, addUser, createUser, detailUser };