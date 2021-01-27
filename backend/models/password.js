const passwordValidator = require('password-validator');

let passwordSchema = new passwordValidator();

passwordSchema
.is().min(8)
.has().uppercase()
.has().lowercase()
.has().digits(2)
.has().not().spaces()
.is().not().oneOf(['Passw0rd', "Password123"]);

module.exports = passwordSchema;