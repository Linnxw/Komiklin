import jwt from "jsonwebtoken"
import moment from "moment"
import {Request,Response,NextFunction} from "express"
import {IGetApiKeyRequest} from "../types/auth"
export const verifyLevel = (req:IGetApiKeyRequest,res:Response,next: NextFunction)=>{
  const apiKey = req.headers?.authorization?.split(" ")[1]!
  const SECRET_KEY:string = process.env.ACCES_TOKEN!
  jwt.verify(apiKey,SECRET_KEY,(err:any,decode:any)=>{
    if(err){
      console.log({
        error:err,
        dir:"verify ts"
      })
      res.status(403).json({
        status: false,
        data:{
          message:"error validate token"
        }
      })
    }
    req.level = decode.level
    next()
  })
 
}