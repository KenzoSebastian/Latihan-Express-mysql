const { body, check } = require("express-validator");
const { getOneUser } = require("../model/ModelUsers")

const validationArr = [
    body("nama").custom(async value => {
        const [ data, field ] = await getOneUser("nama", value);
        if (data.length !== 0) {
            throw new Error("User yang Anda masukan sudah ada");
        };
        return true;
    }),
    check("email", "Email tidak valid").isEmail(),
    check("nohp", "No Handphone tidak valid").isMobilePhone("id-ID")
];

const validationUpdate = [
    body("nama").custom(async (value, { req }) => {
        const [ data, field ] = await getOneUser("nama", value);
        if (data.length !== 0 && value.toLowerCase() !== req.body.oldNama.toLowerCase()) {
            throw new Error("User yang Anda masukan sudah ada");
        };
        return true;
    }),
    check("email", "Email tidak valid").isEmail(),
    check("nohp", "No Handphone tidak valid").isMobilePhone("id-ID")
];

module.exports = { validationArr, validationUpdate };