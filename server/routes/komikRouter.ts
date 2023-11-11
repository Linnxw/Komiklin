import express,{Router} from "express";
import {getKomikByGenre,getKomikBerwarna,getAllKomikBerwarna,getKomikTerbaru,getAllKomikTerbaru,getDetailKomik,getAllKomikByType,searchKomik} from "../controllers/komikController"

const router:Router = express.Router()

router.get("/by-genre",getKomikByGenre)
router.get("/berwarna",getKomikBerwarna)
router.get("/berwarna/all",getAllKomikBerwarna)
router.get("/terbaru",getKomikTerbaru)
router.get("/terbaru/all",getAllKomikTerbaru)
router.get("/type-komik/:type",getAllKomikByType)
router.get("/search/",searchKomik)
router.get("/:judul",getDetailKomik)
export default router;