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
exports.readChapter = void 0;
const cheerio_1 = require("../config/cheerio");
const clearSymbol_1 = require("../helper/clearSymbol");
const url_1 = __importDefault(require("../constans/url"));
const readChapter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const judul = req.params.judul;
    const chapter = req.params.chapter;
    const $ = yield (0, cheerio_1.fetcher)(`${url_1.default}/${judul}-chapter-177/`);
    const container = $("#content");
    const title = (0, clearSymbol_1.clear)($(container).find('[itemprop="name"]').text());
    const image = [];
    const baner = $(container).find(".thumb > img").attr("src");
    const subTitle = (0, clearSymbol_1.clear)($(container).find(".infox > h2").text());
    const sinopsis = (0, clearSymbol_1.clear)($(container).find(".infox > .shortcsc").text());
    const lastChapter = (0, clearSymbol_1.clear)($("#chapter_list > ul > li").eq(0).text());
    $(container).find("#chimg-auh > img").each((index, element) => {
        const img = $(element).attr("src");
        const alt = $(element).attr("alt");
        image.push({ img, alt });
    });
    res.status(200).json({
        status: true,
        data: {
            title,
            image,
            baner,
            subTitle,
            sinopsis,
            lastChapter
        },
        message: "read chapter"
    });
});
exports.readChapter = readChapter;
//# sourceMappingURL=chapterController.js.map