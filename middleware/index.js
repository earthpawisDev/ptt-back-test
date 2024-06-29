
const validate = require('./validation.middleware');
const throwError = require('./throwError.middleware');
const auth = require('./auth.middleware');


module.exports = {
    validate,
    throwError,
    auth
}