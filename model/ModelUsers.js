const pool = require("../database/db");

const getAllUsers = () => {
    const query = "SELECT * FROM users";
    return pool.execute(query);
};

const getOneUser = (id) => {
    const query = `SELECT * FROM users WHERE id = ${id}`;
    return pool.execute(query);
};


module.exports = { getAllUsers, getOneUser };