import {Request,Response} from "express"
import {fetcher} from "../config/cheerio"
import BASE_URL from "../constans/url"
export const getPopulerToday = async (req: Request,res: Response) =>{
  
    const $ = await fetcher(BASE_URL)
    
    const data: any[] = [];
    const listManhwa = $(".mangapopuler > .customslider > .odadingslider")!;
 
    listManhwa.each((i:number, elem: any) => {
     const animePosts = $(elem).find(".animepost")!;

    animePosts.each((i:number, elem:any) => {
      const title = $(elem).find(".tt > h4").text().trim()!;
      const baner = $(elem).find('.animposx > a > .limit > img').attr("src")!;
      const info = $(elem).find(".animposx > .bigor")!
      
      info.each((i:number,elem:any)=>{
        
      const totalChapter = $(elem).find(' .adds > .lsch > a').text()!
      const lastUpdate = $(elem).find('.adds > .lsch > .datech').text().trim()!
      
      data.push({ title ,baner,totalChapter,lastUpdate});
      })

    });
    });
  res.json(data);
}

export const getPopulerTop = async (req: Request,res: Response) =>{
  
    const $ = await fetcher(BASE_URL)
    
    const data: any[] = [];
    const listManhwa = $("#sidebar > .senc > .widgets > .sencs > .widget-post > .pop > ul")!;
    
    listManhwa.each((i:number, elem: any) => {
     const animePosts = $(elem).find("li")!
     
    animePosts.each((i:number, elem2:any) => {
      const title = $(elem2).find(".leftseries > h4 > .series").text()!
      
      const top = $(elem2).find(".leftseries > div:first").text()!
      const rating = $(elem2).find(".leftseries > .loveviews").text()!
       const baner = $(elem).find(".imgseries > .series > img").attr("src")!
       data.push({title,rating,top,baner})

    });
    });
  res.json(data);
}