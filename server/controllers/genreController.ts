import {Request,Response} from "express";
import {fetcher} from "../config/cheerio";
import BASE_URL from "../constans/url"
export const getGenreKomik = async (req: Request,res: Response) => {
  console.log("ON CONTROLLERS")
  const $ = await fetcher(BASE_URL)
  const allGenre = $(".odadinggenre > .widget-body > .content > ul")
  const listGenreKomik: any[]= []
  allGenre.each((index:number,element:any)=>{
    $(element).find("li").each((index:number,element:any)=>{
      listGenreKomik.push($(element).find("a").text())
    })
    
  })
  res.status(200).json({
    status:true,
    data:listGenreKomik,
    statusCode:200,
    message:"Get genre komik"
  })
}

