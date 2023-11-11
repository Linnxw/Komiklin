import express,{Router} from "express";
import {getPaginationKomikBerwarna,
getPaginationKomikTerbaru
} from "../controllers/paginationController"
const router :Router = express.Router()

router.get("/komik-berwarna",getPaginationKomikBerwarna)
router.get("/komik-terbaru",getPaginationKomikTerbaru)
export default router