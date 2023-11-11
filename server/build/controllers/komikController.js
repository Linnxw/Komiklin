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
exports.searchKomik = exports.getAllKomikByType = exports.getDetailKomik = exports.getAllKomikTerbaru = exports.getKomikTerbaru = exports.getAllKomikBerwarna = exports.getKomikBerwarna = exports.getKomikByGenre = void 0;
const cheerio_1 = require("../config/cheerio");
const clearSymbol_1 = require("../helper/clearSymbol");
const url_1 = __importDefault(require("../constans/url"));
const getKomikByGenre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query.genre;
    const data = [];
    const genre = query.split("-")[1];
    const $ = yield (0, cheerio_1.fetcher)(url_1.default);
    const container = $(".odadinggenre > .widget-body");
    const komikByGenre = $(container).find(`.post-show > .listupd > .odadingslider > #${genre.toLowerCase()}`);
    komikByGenre.each((index, element) => {
        const card = $(element).find(".animepost > .animposx");
        card.each((index, element) => {
            const title = $(element).find(".bigors > a > .tt > h4").text().trim();
            const baner = $(element).find("a > .limit > img").attr("src");
            const rating = $(element).find(".bigors > .adds > .rating > i").text().trim();
            data.push({ title, baner, rating });
        });
    });
    res.status(200).json({
        status: true,
        data,
        statusCode: 200,
        message: "Get Komik by genre"
    });
});
exports.getKomikByGenre = getKomikByGenre;
const getKomikBerwarna = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = [];
    const $ = yield (0, cheerio_1.fetcher)(url_1.default);
    const container = $(".postbody > section").eq(4);
    const listContent = $(container).find(".odadingslider");
    listContent.each((i, elem) => {
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
    res.status(200).json({
        status: true,
        data,
        statusCode: 200,
        message: "Get Komik berwarna"
    });
});
exports.getKomikBerwarna = getKomikBerwarna;
const getAllKomikBerwarna = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = [];
    const $ = yield (0, cheerio_1.fetcher)(`${url_1.default}/komik-berwarna/page/${req.query.page || 1}/`);
    const container = $("#content > .postbody > .whites");
    const totalPage = $(".pagination > .page-numbers").eq(4).text();
    const listContent = $(container).find(".listupd");
    listContent.each((i, elem) => {
        const animePosts = $(elem).find(".animepost");
        animePosts.each((i, elem) => {
            const title = $(elem).find(".bigors > a > .tt > h4").text().trim();
            const baner = $(elem).find("a > .limit > img").attr("src");
            const totalChapter = $(elem).find(' .adds > .lsch > a').text();
            const lastUpdate = $(elem).find('.adds > .lsch > .datech').text().trim();
            data.push({ title, baner, totalChapter, lastUpdate });
        });
    });
    res.status(200).json({
        status: true,
        data: {
            result: data,
            totalPage
        },
        statusCode: 200,
        message: "Get all new Komik"
    });
});
exports.getAllKomikBerwarna = getAllKomikBerwarna;
const getKomikTerbaru = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const $ = yield (0, cheerio_1.fetcher)(url_1.default);
    const container = $("#content > .postbody > section").eq(3);
    const data = [];
    const komikTerbaru = $(container).find(".listupd");
    komikTerbaru.each((index, element) => {
        const card = $(element).find(".animposx");
        card.each((index, element) => {
            const topBottom = $(element).find(".animepostxx-top-bottom");
            const title = $(topBottom).find(".tt").text().trim();
            const baner = $(element).find(".limietles > img").attr("src");
            const status = $(element).find(".animepostxx-bottom > .info-skroep > div").eq(0).text().trim();
            const rating = $(topBottom).find(".info-skroep div").eq(0).text().trim();
            const komikType = $(topBottom).find(".info-skroep div").eq(1).text().trim();
            const warna = $(topBottom).find(".info-skroep div").eq(3).text().trim();
            const totalPembaca = $(topBottom).find(".info-skroep div").eq(2).text().trim();
            const chapter = [];
            $(element).find(".animepostxx-bottom > .info-skroep > .list-ch-skroep").each((index, element) => {
                const chptr = $(element).find(".lsch");
                chptr.each((index, element) => {
                    const chptr = $(element).find("a").text().trim();
                    chapter.push(chptr);
                });
            });
            data.push({ title, baner, status, chapter, rating, komikType, warna, totalPembaca });
        });
    });
    res.status(200).json({
        status: true,
        data,
        statusCode: 200,
        message: "Get new Komik"
    });
});
exports.getKomikTerbaru = getKomikTerbaru;
const getAllKomikTerbaru = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = [];
    const $ = yield (0, cheerio_1.fetcher)(`${url_1.default}/komik-terbaru/page/${req.query.page || 1}/`);
    const container = $("#content > .postbody > .whites");
    const totalPage = $(".pagination > .page-numbers").eq(4).text();
    const listContent = $(container).find(".listupd");
    listContent.each((i, elem) => {
        const animePosts = $(elem).find(".animepost");
        animePosts.each((i, elem) => {
            const title = $(elem).find(".bigor > a > .tt > h4").text().trim();
            const baner = $(elem).find("a > .limit > img").attr("src");
            const totalChapter = $(elem).find(' .adds > .lsch > a').text();
            const lastUpdate = $(elem).find('.adds > .lsch > .datech').text().trim();
            data.push({ title, baner, totalChapter, lastUpdate });
        });
    });
    res.status(200).json({
        status: true,
        data: {
            result: data,
            totalPage
        },
        statusCode: 200,
        message: "Get all new Komik"
    });
});
exports.getAllKomikTerbaru = getAllKomikTerbaru;
const getDetailKomik = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const $ = yield (0, cheerio_1.fetcher)(`${url_1.default}/komik/${req.params.judul}`);
    const container = $(".postbody");
    const title = (0, clearSymbol_1.clear)($(container).find(".entry-title").text());
    const cover = $(".bigcover > img").attr("src");
    const baner = $(container).find(".thumb > img").attr("src");
    const headerText = (0, clearSymbol_1.clear)($(container).find("article > .whites > .infoanime > .shortcsc").text());
    const chapter = {
        chapterAwal: (0, clearSymbol_1.clear)($(container).find(".epsbaru > div").eq(0).find(".barunew").text()),
        chapterAkhir: (0, clearSymbol_1.clear)($(container).find(".epsbaru > div").eq(1).find(".barunew").text())
    };
    const rating = (0, clearSymbol_1.clear)($(container).find('[itemprop="ratingValue"]').text());
    const votesCount = (0, clearSymbol_1.clear)($(container).find(".votescount").text());
    const wraperDetails = $(container).find(".infox > .spe");
    const tema = [];
    const containTema = $(wraperDetails).find("span").eq(5);
    containTema.each((index, element) => {
        $(element).find("a").each((index, element) => {
            tema.push($(element).text());
        });
    });
    const judulAlternatif = (0, clearSymbol_1.clear)($(wraperDetails).find("span").eq(0).text());
    const status = (0, clearSymbol_1.clear)($(wraperDetails).find("span").eq(1).text());
    const pengarang = (0, clearSymbol_1.clear)($(wraperDetails).find("span").eq(2).find("a").text());
    const ilustrator = (0, clearSymbol_1.clear)($(wraperDetails).find("span").eq(3).find("a").text());
    const grafis = (0, clearSymbol_1.clear)($(wraperDetails).find("span").eq(4).find("a").text());
    const jenis = (0, clearSymbol_1.clear)($(wraperDetails).find("span").eq(6).find("a").text());
    const jumlahPembaca = (0, clearSymbol_1.clear)($(wraperDetails).find("span").eq(9).text());
    const genre = [];
    $(container).find(".genre-info > a").each((index, element) => {
        genre.push($(element).text());
    });
    const penjelasanSingkat = (0, clearSymbol_1.clear)($(container).find(".shortcsc > p").text()).replace("/", "");
    const sinopsis = (0, clearSymbol_1.clear)($(container).find("#sinopsis").find("p").text());
    const lastChapter = (0, clearSymbol_1.clear)($(container).find("#chapter_list").find("chapter").eq(0).text());
    const details = {
        judulAlternatif,
        status,
        pengarang,
        ilustrator,
        grafis,
        jenis,
        tema,
        jumlahPembaca,
        genre,
        penjelasanSingkat
    };
    const data = {
        title,
        cover,
        baner,
        headerText,
        chapter,
        rating,
        votesCount,
        details,
        sinopsis,
        lastChapter
    };
    res.status(200).json({
        status: true,
        data,
        statusCode: 200,
        message: "Get Komik detail"
    });
});
exports.getDetailKomik = getDetailKomik;
const getAllKomikByType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = [];
    const $ = yield (0, cheerio_1.fetcher)(`${url_1.default}/baca-${req.params.type}/page/${req.query.page || 1}/`);
    const container = $("#content > .postbody > .whites");
    const totalPage = $(".pagination > .page-numbers").eq(4).text();
    const listContent = $(container).find(".listupd");
    listContent.each((i, elem) => {
        const animePosts = $(elem).find(".animepost");
        animePosts.each((i, elem) => {
            const title = $(elem).find(".bigor > a > .tt > h4").text().trim();
            const baner = $(elem).find("a > .limit > img").attr("src");
            const totalChapter = $(elem).find(' .adds > .lsch > a').text();
            const lastUpdate = $(elem).find('.adds > .lsch > .datech').text().trim();
            data.push({ title, baner, totalChapter, lastUpdate });
        });
    });
    res.status(200).json({
        status: true,
        data: {
            result: data,
            totalPage
        },
        statusCode: 200,
        message: "Get all new Komik"
    });
});
exports.getAllKomikByType = getAllKomikByType;
const searchKomik = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = [];
    let search = req.query.s;
    const $ = yield (0, cheerio_1.fetcher)(`${url_1.default}/?s=${search}`);
    const container = $(".postbody");
    console.log($(container).html());
    const komikList = $(container).find(".film-list > .animepost > .animposx");
    komikList.each((index, element) => {
        const title = $(element).find(".bigors > a > .tt > h4").text().trim();
        const baner = $(element).find("a > .limit > img").attr("src");
        const rating = $(element).find(".bigors > .adds > .rating > i").text().trim();
        data.push({ title, baner, rating });
    });
    res.status(200).json({
        status: true,
        data: {
            result: data
        },
        statusCode: 200,
        message: "Search Komik"
    });
});
exports.searchKomik = searchKomik;
//# sourceMappingURL=komikController.js.map