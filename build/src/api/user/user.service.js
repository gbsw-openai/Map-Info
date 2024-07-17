"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserPic = exports.get = exports.take = exports.login = exports.create = void 0;
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const db_config_1 = require("../../db.config");
const prisma = (0, db_config_1.createDBconnection)();
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, email } = user;
    const _password = (yield (0, bcryptjs_1.hash)(user.password, 10));
    if (yield prisma.user.findUnique({ where: { id } }))
        return { status: 401, type: 'ID EXISTED' };
    if (yield prisma.user.findUnique({ where: { email } }))
        return { status: 401, type: 'EMAIL EXISTED' };
    const defaultPic = 'uploads';
    const createQry = yield prisma.user.create({
        data: { id, password: _password, email, userPic: defaultPic, bookmark: {} }
    });
    return { status: 200, message: createQry };
});
exports.create = create;
const login = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: _id, password: _password } = user;
    const findQry = yield prisma.user.findUnique({ where: { id: _id } });
    if (!findQry)
        return { status: 401, type: 'NOTFOUND' };
    const { idx, id, password } = findQry;
    if (!(yield (0, bcryptjs_1.compare)(_password, password)))
        return { status: 401, type: 'INVALID' };
    const token = (0, jsonwebtoken_1.sign)({ idx, id }, 'token_key', { expiresIn: '3d' });
    return { status: 200, token };
});
exports.login = login;
const take = (range) => __awaiter(void 0, void 0, void 0, function* () {
    return { status: 200, qry: yield prisma.user.findMany({ take: range }) };
});
exports.take = take;
const get = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return { status: 200, qry: yield prisma.user.findUnique({ where: { id } }) };
});
exports.get = get;
const updateUserPic = (idx, imgPath) => __awaiter(void 0, void 0, void 0, function* () {
    const userPic = imgPath;
    const updateQry = yield prisma.user.update({ where: { idx }, data: { userPic } });
    return { status: 201, message: updateQry };
});
exports.updateUserPic = updateUserPic;
