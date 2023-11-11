"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyLevel = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyLevel = (req, res, next) => {
    var _a, _b;
    const apiKey = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")[1];
    const SECRET_KEY = process.env.ACCES_TOKEN;
    jsonwebtoken_1.default.verify(apiKey, SECRET_KEY, (err, decode) => {
        if (err) {
            console.log({
                error: err,
                dir: "verify ts"
            });
            res.status(403).json({
                status: false,
                data: {
                    message: "error validate token"
                }
            });
        }
        req.level = decode.level;
        console.log("NEXT FROM MIDDLEWARE 1");
        next();
    });
};
exports.verifyLevel = verifyLevel;
//# sourceMappingURL=Verify.js.map