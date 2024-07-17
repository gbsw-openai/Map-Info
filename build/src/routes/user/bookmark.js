"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController = require('../../api/user/bookmark.controller');
router.post('/add', userController.add);
router.get('/:id', userController.get);
router.delete('/remove', userController.remove);
module.exports = router;
