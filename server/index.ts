import express,{Application} from "express";
import authRouter from "./routes/authRouter"
import {routes} from "./routes"
import dotenv from "dotenv"
dotenv.config()
const app: Application = express();

app.use("/api/auth",authRouter)
routes(app)

app.listen(process.env.PORT || 7777,()=>{
  console.log("server runing")
})