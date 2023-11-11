"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const populerRouter_1 = __importDefault(require("./populerRouter"));
const genreRouter_1 = __importDefault(require("./genreRouter"));
const komikRouter_1 = __importDefault(require("./komikRouter"));
const paginationRouter_1 = __importDefault(require("./paginationRouter"));
const chapterRouter_1 = __importDefault(require("./chapterRouter"));
const Verify_1 = require("../middleware/Verify");
const rateLimit_1 = require("../config/rateLimit");
const _router = [
    ["/populer", Verify_1.verifyLevel, rateLimit_1.apiKeyLimit, populerRouter_1.default],
    ["/genre", Verify_1.verifyLevel, rateLimit_1.apiKeyLimit, genreRouter_1.default],
    ["/komik", Verify_1.verifyLevel, rateLimit_1.apiKeyLimit, komikRouter_1.default],
    ["/pagination", Verify_1.verifyLevel, rateLimit_1.apiKeyLimit, paginationRouter_1.default],
    ["/chapter", Verify_1.verifyLevel, rateLimit_1.apiKeyLimit, chapterRouter_1.default],
];
const routes = (app) => {
    _router.forEach(route => {
        const [url, middleware1, middleware2, router] = route;
        app.use("/api" + url, middleware1, middleware2, router);
    });
};
exports.routes = routes;
//# sourceMappingURL=index.js.map