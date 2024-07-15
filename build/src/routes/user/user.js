"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController = require('../../api/user/user.controller');
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:idx', userController.range);
module.exports = router;
