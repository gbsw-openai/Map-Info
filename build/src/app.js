"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const port = process.env.PORT || 3001;
const cors = require('cors');
app.use(cors());
const api = require('./routes/init');
app.use('/api', api);
app.listen(port, () => {
    console.log(`
  ################################################
      🛡️  Server listening on port: ${port}  🛡️
  ################################################`);
});
