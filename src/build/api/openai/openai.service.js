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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ask = void 0;
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai = new openai_1.default({
    apiKey: process.env['OPENAI_API_KEY']
});
const ask = (ask) => __awaiter(void 0, void 0, void 0, function* () {
    const ask_chatgpt = (address, question) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: "system",
                    content: `You are a useful assistant who provides quality information about the surroundings of ${address}.`,
                },
                {
                    role: "user",
                    content: question
                }
            ],
        });
        return response.choices[0].message.content;
    });
    const { address, question } = ask;
    const askQry = yield ask_chatgpt(address, question);
    return { status: 200, message: askQry };
});
exports.ask = ask;
