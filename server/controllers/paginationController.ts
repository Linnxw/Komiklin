import {Request,Response} from "express"
import {fetcher} from "../config/cheerio"
import BASE_URL from "../constans/url"

export const getPaginationKomikBerwarna = async (req: Request,res: Response) =>{
  const $ = await fetcher(`${BASE_URL}/komik-berwarna/`)
  const pagination = $(".pagination > .page-numbers").eq(4).text()
  const data = {
    totalData:pagination
  }
  res.status(200).json(data)
}

export const getPaginationKomikTerbaru = async (req: Request,res: Response) =>{
  const $ = await fetcher(`${BASE_URL}/komik-terbaru`)
  const pagination = $(".pagination > .page-numbers").eq(4).text()
  const data = {
    totalData:pagination
  }
  res.status(200).json(data)
}