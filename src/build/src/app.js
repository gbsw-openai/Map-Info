"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const init_1 = __importDefault(require("../routes/init"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.set("port", process.env.PORT || 3000);
app.use('/api', init_1.default);
app.listen(app.get("port"), () => {
    console.log("open in port", app.get("port"));
});
