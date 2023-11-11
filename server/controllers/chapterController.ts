import {Request,Response} from "express"
import {fetcher} from "../config/cheerio"
import {clear} from "../helper/clearSymbol"
import {Cheerio,Element} from "cheerio"
import BASE_URL from "../constans/url"
export const readChapter = async (req: Request,res: Response)=>{
  const judul: string= req.params.judul
  const chapter: string = req.params.chapter
  const $ = await fetcher(`${BASE_URL}/${judul}-chapter-${chapter}/`)
  const container:Cheerio<Element> = $("#content")
  const title = clear($(container).find('[itemprop="name"]').text())
  const image: {img:string ,alt: string}[]= []
  const baner = $(container).find(".thumb > img").attr("src")
  const subTitle = clear($(container).find(".infox > h2").text())
  const sinopsis = clear($(container).find(".infox > .shortcsc").text())
  const lastChapter = clear($("#chapter_list > ul > li").eq(0).text())
  $(container).find("#chimg-auh > img").each((index:number,element:any)=>{
    const img:string = $(element).attr("src")!
    const alt:string = $(element).attr("alt")!
    image.push({img,alt})
  })
  res.status(200).json({
    status:true,
    data:{
      title,
      image,
      baner,
      subTitle,
      sinopsis,
      lastChapter
    },
    message:"read chapter"
  })
}
  