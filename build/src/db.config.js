"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDBconnection = void 0;
const client_1 = require("@prisma/client");
let cachedConnect;
const createDBconnection = () => {
    if (cachedConnect) {
        console.log('Already Connected!');
        return cachedConnect;
    }
    console.log('Connecting..');
    const connection = new client_1.PrismaClient();
    cachedConnect = connection;
    return connection;
};
exports.createDBconnection = createDBconnection;
