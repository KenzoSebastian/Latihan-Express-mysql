const mysql = require("mysql2/promise");

const host = "localhost";
const user = "root";
const password = "";
const database = "express_mysql";

const pool = mysql.createPool({ host, user, password, database });

module.exports = pool;