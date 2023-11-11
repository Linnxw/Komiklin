import rateLimit from "express-rate-limit"
import {IGetApiKeyRequest} from "../types/auth"
import {LIMIT_USER,LIMIT_MEMBER,LIMIT_PREMIUM} from "../constans/limit"
const validateLimit = (level: string):number =>{
  return (
  level == "1" ? LIMIT_PREMIUM 
  :
  level == "2" ? LIMIT_MEMBER 
  : 
  LIMIT_USER )
}


export const apiKeyLimit = rateLimit({
  windowMs:1 * 60 * 1000,
  limit:(req:IGetApiKeyRequest)=>{
    const level:string = req.level!
    return validateLimit(level)
  }
})