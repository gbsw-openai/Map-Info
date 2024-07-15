"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const openaiController = require('../../api/openai/openai.controller');
router.post('/ask', openaiController.ask_chatgpt);
module.exports = router;
