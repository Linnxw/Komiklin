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
exports.getPopulerTop = exports.getPopulerToday = void 0;
const cheerio_1 = require("../config/cheerio");
const url_1 = __importDefault(require("../constans/url"));
const getPopulerToday = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const $ = yield (0, cheerio_1.fetcher)(url_1.default);
    const data = [];
    const listManhwa = $(".mangapopuler > .customslider > .odadingslider");
    listManhwa.each((i, elem) => {
        const animePosts = $(elem).find(".animepost");
        animePosts.each((i, elem) => {
            const title = $(elem).find(".tt > h4").text().trim();
            const baner = $(elem).find('.animposx > a > .limit > img').attr("src");
            const info = $(elem).find(".animposx > .bigor");
            info.each((i, elem) => {
                const totalChapter = $(elem).find(' .adds > .lsch > a').text();
                const lastUpdate = $(elem).find('.adds > .lsch > .datech').text().trim();
                data.push({ title, baner, totalChapter, lastUpdate });
            });
        });
    });
    res.json(data);
});
exports.getPopulerToday = getPopulerToday;
const getPopulerTop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const $ = yield (0, cheerio_1.fetcher)(url_1.default);
    const data = [];
    const listManhwa = $("#sidebar > .senc > .widgets > .sencs > .widget-post > .pop > ul");
    listManhwa.each((i, elem) => {
        const animePosts = $(elem).find("li");
        animePosts.each((i, elem2) => {
            const title = $(elem2).find(".leftseries > h4 > .series").text();
            const top = $(elem2).find(".leftseries > div:first").text();
            const rating = $(elem2).find(".leftseries > .loveviews").text();
            const baner = $(elem).find(".imgseries > .series > img").attr("src");
            data.push({ title, rating, top, baner });
        });
    });
    res.json(data);
});
exports.getPopulerTop = getPopulerTop;
//# sourceMappingURL=populerController.js.map