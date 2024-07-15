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
const userService = require('./user.service');
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const service = yield userService.create(user);
    res.json(service);
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const service = yield userService.login(user);
    res.json(service);
});
const range = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield userService.take(+req.params.idx);
    res.json(service);
});
module.exports = { register, login, range };
