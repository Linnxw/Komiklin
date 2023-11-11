"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateApiKey = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const moment_1 = __importDefault(require("moment"));
const generateApiKey = (req, res) => {
    const level = parseInt(req.params.level);
    const date = (0, moment_1.default)().format("D MMM , YYYY");
    const SECRET_KEY = process.env.ACCES_TOKEN;
    const apiKey = jsonwebtoken_1.default.sign({ level, date }, SECRET_KEY, {
        expiresIn: "1y"
    });
    console.log({ apiKey, date });
    res.status(200).json({
        status: true,
        data: {
            apiKey
        },
        message: "generate api key"
    });
};
exports.generateApiKey = generateApiKey;
//# sourceMappingURL=Autentication.js.map