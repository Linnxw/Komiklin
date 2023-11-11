import express,{Router} from "express";
import {getPopulerToday,
  getPopulerTop
} from "../controllers/populerController"
const router :Router = express.Router()

router.get("/today",getPopulerToday)
router.get("/top",getPopulerTop)
export default router