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
exports.getGenreKomik = void 0;
const cheerio_1 = require("../config/cheerio");
const url_1 = __importDefault(require("../constans/url"));
const getGenreKomik = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("ON CONTROLLERS");
    const $ = yield (0, cheerio_1.fetcher)(url_1.default);
    const allGenre = $(".odadinggenre > .widget-body > .content > ul");
    const listGenreKomik = [];
    allGenre.each((index, element) => {
        $(element).find("li").each((index, element) => {
            listGenreKomik.push($(element).find("a").text());
        });
    });
    res.status(200).json({
        status: true,
        data: listGenreKomik,
        statusCode: 200,
        message: "Get genre komik"
    });
});
exports.getGenreKomik = getGenreKomik;
//# sourceMappingURL=genreController.js.map