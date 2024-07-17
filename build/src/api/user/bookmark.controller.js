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
exports.remove = exports.get = exports.add = void 0;
const bookmarkService = require('./bookmark.service');
const add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookmark = req.body;
    const service = yield bookmarkService.create(bookmark);
    res.json(service);
});
exports.add = add;
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield bookmarkService.read(req.params.id);
    res.json(service);
});
exports.get = get;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookmark = req.body;
    const service = yield bookmarkService.remove(bookmark);
    res.json(service);
});
exports.remove = remove;
