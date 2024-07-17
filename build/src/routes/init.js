"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = (0, express_1.Router)();
router.get("/", (_, res) => {
    res.send("Map Info api");
});
const openai = require('./openai/openai');
router.use('/openai', openai);
const user = require('./user/user');
router.use('/user', user);
const bookmark = require('./user/bookmark');
router.use('/user/bookmark', bookmark);
const post = require('./user/post');
router.use('/user', post);
module.exports = router;
