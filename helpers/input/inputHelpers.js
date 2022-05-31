const bcrypt = require("bcryptjs");


const validateUserInput = (email,password) => email && password

const comparePassword = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword)

module.exports = {
    validateUserInput,
    comparePassword
};