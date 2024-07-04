const pool = require("../database/db");

const getAllUsers = () => {
    const query = "SELECT * FROM users";
    return pool.execute(query);
};

const getOneUser = (key, value) => {
    const query = `SELECT * FROM users WHERE ${key} = "${value}"`;
    return pool.execute(query);
};

const insertUser = (body) => {
    const query = `INSERT INTO users VALUES
                    ("", "${body.nama}", "${body.email}", "${body.nohp}",
                    "${body.jenis_kelamin}", "${body.alamat}")`;

    return pool.execute(query);
};

module.exports = { getAllUsers, getOneUser, insertUser };