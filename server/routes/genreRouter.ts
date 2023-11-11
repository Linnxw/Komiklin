import express,{Router} from "express";
import {getGenreKomik} from "../controllers/genreController"

const router:Router = express.Router()

router.get("/genrekomik",getGenreKomik)

export default router;