const express = require("express");
const routers = express.Router();
const user = require('./api/user.routes');

routers.use(user);


module.exports = routers;