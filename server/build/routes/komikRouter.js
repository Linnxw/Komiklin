"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const komikController_1 = require("../controllers/komikController");
const router = express_1.default.Router();
router.get("/by-genre", komikController_1.getKomikByGenre);
router.get("/berwarna", komikController_1.getKomikBerwarna);
router.get("/berwarna/all", komikController_1.getAllKomikBerwarna);
router.get("/terbaru", komikController_1.getKomikTerbaru);
router.get("/terbaru/all", komikController_1.getAllKomikTerbaru);
router.get("/type-komik/:type", komikController_1.getAllKomikByType);
router.get("/search/", komikController_1.searchKomik);
router.get("/:judul", komikController_1.getDetailKomik);
exports.default = router;
//# sourceMappingURL=komikRouter.js.map