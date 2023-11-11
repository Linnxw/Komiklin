import jwt from "jsonwebtoken"
import moment from "moment"
import {Request,Response} from "express"

export const generateApiKey = (req:Request,res: Response)=>{
  const level:number = parseInt(req.params.level)
  const date = moment().format("D MMM , YYYY")
  const SECRET_KEY:string = process.env.ACCES_TOKEN!
  const apiKey = jwt.sign({level,date},SECRET_KEY,{
    expiresIn:"1y"
    })
   console.log({apiKey, date})
  res.status(200).json({
    status:true,
    data:{
      apiKey
    },
    message:"generate api key"
  })
 }
 
 