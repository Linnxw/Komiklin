"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const genreController_1 = require("../controllers/genreController");
const router = express_1.default.Router();
router.get("/genrekomik", genreController_1.getGenreKomik);
exports.default = router;
//# sourceMappingURL=genreRouter.js.map