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
exports.remove = exports.read = exports.create = void 0;
const db_config_1 = require("../../db.config");
const prisma = (0, db_config_1.createDBconnection)();
const create = (bookmark) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, address, user_id } = bookmark;
    const createQry = yield prisma.bookmark.create({
        data: { name, address, userId: user_id }
    });
    return { status: 201, message: createQry };
});
exports.create = create;
const read = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const readQry = yield prisma.bookmark.findMany({
        where: { userId }
    });
    return { status: 200, qry: readQry };
});
exports.read = read;
const remove = (bookmark) => __awaiter(void 0, void 0, void 0, function* () {
    const { address, user_id } = bookmark;
    const deleteQry = yield prisma.bookmark.delete({
        where: {
            userId_address: {
                userId: user_id,
                address: address,
            },
        }
    });
    return { status: 204, message: deleteQry };
});
exports.remove = remove;
