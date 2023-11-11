import populerRouter from "./populerRouter"
import genreRouter from "./genreRouter"
import komikRouter from "./komikRouter"
import paginationRouter from "./paginationRouter"
import chapterRouter from "./chapterRouter"
import {verifyLevel} from "../middleware/Verify"
import {apiKeyLimit} from "../config/rateLimit"
import authRouter from "./authRouter"
import {Application,Router,RequestHandler} from "express"
const _router: Array<[string,RequestHandler,RequestHandler, Router]> = [
  ["/populer",verifyLevel,apiKeyLimit,populerRouter],
  ["/genre",verifyLevel,apiKeyLimit,genreRouter],
  ["/komik",verifyLevel,apiKeyLimit,komikRouter],
  ["/pagination",verifyLevel,apiKeyLimit,paginationRouter],
  ["/chapter",verifyLevel,apiKeyLimit,chapterRouter],
  ]
  
export const routes = (app:Application) => {
  _router.forEach(route => {
    const [url,middleware1,middleware2,router] = route;
    app.use("/api"+url,middleware1,middleware2,router)
  });
}