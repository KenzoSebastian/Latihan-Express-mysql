const pool = require("../database/db");

const modelUser = (query) => pool.execute(query);

module.exports = { modelUser };