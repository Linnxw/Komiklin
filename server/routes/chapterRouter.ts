import express,{Router} from "express";
import {readChapter
} from "../controllers/chapterController"

const router :Router = express.Router()

router.get("/:judul/:chapter",readChapter)

export default router