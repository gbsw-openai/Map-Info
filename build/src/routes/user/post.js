"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
const userController = require('../../api/user/user.controller');
try {
    fs_1.default.readdirSync('uploads');
}
catch (error) {
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs_1.default.mkdirSync('uploads');
}
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path_1.default.extname(file.originalname);
            done(null, Date.now() + ext);
        }
    }),
    limits: { fieldSize: 5 * 1024 * 1024 },
});
router.post('/pic/:idx', upload.single('image'), function (req, res) {
    userController.picture;
});
module.exports = router;
