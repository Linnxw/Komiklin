"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paginationController_1 = require("../controllers/paginationController");
const router = express_1.default.Router();
router.get("/komik-berwarna", paginationController_1.getPaginationKomikBerwarna);
router.get("/komik-terbaru", paginationController_1.getPaginationKomikTerbaru);
exports.default = router;
//# sourceMappingURL=paginationRouter.js.map