const { getAllUsers, getOneUser } = require("../model/ModelUsers");
const { renderUsers } = require("../dataRender/render");

const getUsers = async (req, res) => {
    try {
        const [ datas, field ] = await getAllUsers();
        res.render("users/users",{datas, ...renderUsers});
    } catch (error) {
        res.status(404).json(error);
    };
};

const addUser = (req, res) => {
    res.render("users/addUser", renderUsers);
};

const createUser = async (req, res) => {
    console.log(req.body);
    const dataUser = req.body;
    // const [datas, field] = await modelUser(`INSERT INTO users VALUES
    //                                     ("", "${dataUser.nama}", "${dataUser.email}", "${dataUser.nohp}", "${dataUser.jenis_kelamin}", "${dataUser.alamat}")`);
    res.redirect("/users");

}

const detailUser = async (req, res) => {
    try {
        const [datas, field] = await getOneUser(req.params.id);
        res.render("users/detailUser", { datas, ...renderUsers });
    } catch (error) {
        res.cookie("error", error, { maxAge: 60000, httpOnly: true });
        res.redirect("/error");
    }



};


module.exports = { getUsers, addUser, createUser, detailUser };