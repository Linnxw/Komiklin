"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Autentication_1 = require("../auth/Autentication");
const router = express_1.default.Router();
router.post("/api-key/:level", Autentication_1.generateApiKey);
exports.default = router;
//# sourceMappingURL=authRouter.js.map