const express = require('express');
const router = express.Router();
const controller = require('../../controller/user.controller');
const { pathUrl } = require('../../configs/pathURL.config');


router.post(`${pathUrl}/register-user`,controller.registerUser);
router.get(`${pathUrl}/table-user`,controller.getUserTable);

module.exports = router;