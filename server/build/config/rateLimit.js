"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyLimit = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const limit_1 = require("../constans/limit");
const validateLimit = (level) => {
    return (level == "1" ? limit_1.LIMIT_PREMIUM
        :
            level == "2" ? limit_1.LIMIT_MEMBER
                :
                    limit_1.LIMIT_USER);
};
exports.apiKeyLimit = (0, express_rate_limit_1.default)({
    windowMs: 1 * 60 * 1000,
    limit: (req) => {
        const level = req.level;
        return validateLimit(level);
    }
});
//# sourceMappingURL=rateLimit.js.map