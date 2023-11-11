import {Request} from "express"

export interface IGetApiKeyRequest extends Request{
  level?: string 
}