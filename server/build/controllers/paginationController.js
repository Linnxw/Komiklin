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
exports.getPaginationKomikTerbaru = exports.getPaginationKomikBerwarna = void 0;
const cheerio_1 = require("../config/cheerio");
const url_1 = __importDefault(require("../constans/url"));
const getPaginationKomikBerwarna = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const $ = yield (0, cheerio_1.fetcher)(`${url_1.default}/komik-berwarna/`);
    const pagination = $(".pagination > .page-numbers").eq(4).text();
    const data = {
        totalData: pagination
    };
    res.status(200).json(data);
});
exports.getPaginationKomikBerwarna = getPaginationKomikBerwarna;
const getPaginationKomikTerbaru = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const $ = yield (0, cheerio_1.fetcher)(`${url_1.default}/komik-terbaru`);
    const pagination = $(".pagination > .page-numbers").eq(4).text();
    const data = {
        totalData: pagination
    };
    res.status(200).json(data);
});
exports.getPaginationKomikTerbaru = getPaginationKomikTerbaru;
//# sourceMappingURL=paginationController.js.map