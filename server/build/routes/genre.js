"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getGenreKomik_1 = require("../controllers/getGenreKomik");
const router = express_1.default.Router();
router.get("/genrekomik", getGenreKomik_1.getGenreKomik);
exports.default = router;
//# sourceMappingURL=genre.js.map