import express,{Router} from "express";
import {generateApiKey} from "../auth/Autentication"
const router :Router = express.Router()

router.post("/api-key/:level",generateApiKey)
export default router