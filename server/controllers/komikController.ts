import {Request,Response} from "express"
import {fetcher} from "../config/cheerio"
import {clear} from "../helper/clearSymbol"
import {DetailKomik,InfoKomik} from "../types/komik"
import {Cheerio,Element} from "cheerio"
import BASE_URL from "../constans/url"
export const getKomikByGenre = async (req: Request,res: Response)=>{
  const query:string | any = req.query.genre
  const data :any[] = []
  const genre = query.split("-")[1]
  const $ = await fetcher(BASE_URL)
  const container = $(".odadinggenre > .widget-body")
  const komikByGenre = $(container).find(`.post-show > .listupd > .odadingslider > #${genre.toLowerCase()}`)
  komikByGenre.each((index:number, element:any)=>{
    const card = $(element).find(".animepost > .animposx")
    card.each((index:number,element:any)=>{
      const title = $(element).find(".bigors > a > .tt > h4").text().trim()
      const baner = $(element).find("a > .limit > img").attr("src")
      const rating = $(element).find(".bigors > .adds > .rating > i").text().trim()
      data.push({title,baner,rating})
    })
   
  })

  res.status(200).json({
    status:true,
    data,
    statusCode:200,
    message:"Get Komik by genre"
  })
}


export const getKomikBerwarna = async (req: Request,res: Response)=>{
  const data :any[] = []
  const $ = await fetcher(BASE_URL)
  const container = $(".postbody > section").eq(4)
  const listContent = $(container).find(".odadingslider")
  listContent.each((i:number, elem: any) => {
     const animePosts = $(elem).find(".animepost");

    animePosts.each((i:number, elem:any) => {
      const title = $(elem).find(".tt > h4").text().trim();
      const baner = $(elem).find('.animposx > a > .limit > img').attr("src");
      const info = $(elem).find(".animposx > .bigor")
      
      info.each((i:number,elem:any)=>{
        
      const totalChapter = $(elem).find(' .adds > .lsch > a').text()
      const lastUpdate = $(elem).find('.adds > .lsch > .datech').text().trim()
      
      data.push({ title ,baner,totalChapter,lastUpdate});
      })

    });
    });
  
  res.status(200).json({
    status:true,
    data,
    statusCode:200,
    message:"Get Komik berwarna"
  })
}

export const getAllKomikBerwarna = async (req:Request,res:Response)=>{
  const data :any[] = []
  const $ = await fetcher(`${BASE_URL}/komik-berwarna/page/${req.query.page || 1}/`)
  
  const container = $("#content > .postbody > .whites")
  const totalPage = $(".pagination > .page-numbers").eq(4).text()
  const listContent = $(container).find(".listupd")
  listContent.each((i:number, elem: any) => {
     const animePosts = $(elem).find(".animepost");

    animePosts.each((i:number, elem:any) => {
      const title = $(elem).find(".bigors > a > .tt > h4").text().trim()
      const baner = $(elem).find("a > .limit > img").attr("src")
      const totalChapter = $(elem).find(' .adds > .lsch > a').text()
      const lastUpdate = $(elem).find('.adds > .lsch > .datech').text().trim()
      data.push({ title ,baner,totalChapter,lastUpdate});

    });
    });
    
  res.status(200).json({
    status:true,
    data:{
      result:data,
      totalPage
    },
    statusCode:200,
    message:"Get all new Komik"
  })
  
}

export const getKomikTerbaru = async (req: Request,res: Response)=>{
  const $ = await fetcher(BASE_URL)
  const container = $("#content > .postbody > section").eq(3)
  const data:any[] = [];
  const komikTerbaru = $(container).find(".listupd")
  komikTerbaru.each((index:number,element:any)=>{
    const card = $(element).find(".animposx")
    card.each((index: number,element:any)=>{
      const topBottom = $(element).find(".animepostxx-top-bottom")
      const title = $(topBottom).find(".tt").text().trim()
      const baner = $(element).find(".limietles > img").attr("src")
      const status = $(element).find(".animepostxx-bottom > .info-skroep > div").eq(0).text().trim()
      const rating = $(topBottom).find(".info-skroep div").eq(0).text().trim()
      const komikType = $(topBottom).find(".info-skroep div").eq(1).text().trim()
      const warna = $(topBottom).find(".info-skroep div").eq(3).text().trim()
      const totalPembaca= $(topBottom).find(".info-skroep div").eq(2).text().trim()
      
      const chapter:any[] = []
      $(element).find(".animepostxx-bottom > .info-skroep > .list-ch-skroep").each((index:number,element:any)=>{
        const chptr = $(element).find(".lsch")
        chptr.each((index:number,element:any)=>{
          const chptr = $(element).find("a").text().trim()
          chapter.push(chptr)
        })
      })
      data.push({title,baner,status,chapter,rating,komikType,warna,totalPembaca})
    })
  })
  res.status(200).json({
    status:true,
    data,
    statusCode:200,
    message:"Get new Komik"
  })
}


export const getAllKomikTerbaru = async (req:Request,res:Response)=>{
  const data :any[] = []
  const $ = await fetcher(`${BASE_URL}/komik-terbaru/page/${req.query.page || 1}/`)
  
  const container = $("#content > .postbody > .whites")
  const totalPage = $(".pagination > .page-numbers").eq(4).text()
  const listContent = $(container).find(".listupd")
  listContent.each((i:number, elem: any) => {
     const animePosts = $(elem).find(".animepost");
    animePosts.each((i:number, elem:any) => {
      const title = $(elem).find(".bigor > a > .tt > h4").text().trim()
      const baner = $(elem).find("a > .limit > img").attr("src")
      const totalChapter = $(elem).find(' .adds > .lsch > a').text()
      const lastUpdate = $(elem).find('.adds > .lsch > .datech').text().trim()
      data.push({ title ,baner,totalChapter,lastUpdate});

    });
    });
  
  res.status(200).json({
    status:true,
    data:{
      result:data,
      totalPage
    },
    statusCode:200,
    message:"Get all new Komik"
  })
}

export const getDetailKomik = async(req:Request,res:Response)=>{
  const $ = await fetcher(`${BASE_URL}/komik/${req.params.judul}`)
  const container = $(".postbody")
  
  const title = clear($(container).find(".entry-title").text())
  const cover: string = $(".bigcover > img").attr("src")!
  const baner: string = $(container).find(".thumb > img").attr("src")!
  const headerText: string = clear($(container).find("article > .whites > .infoanime > .shortcsc").text())
  const chapter={
    chapterAwal:clear($(container).find(".epsbaru > div").eq(0).find(".barunew").text()),
    chapterAkhir:clear($(container).find(".epsbaru > div").eq(1).find(".barunew").text())
  }
  const rating: string = clear($(container).find('[itemprop="ratingValue"]').text())

  const votesCount:string = clear($(container).find(".votescount").text())
  const wraperDetails: Cheerio<Element> = $(container).find(".infox > .spe")
  const tema:string[]=[]
  const containTema = $(wraperDetails).find("span").eq(5)
  containTema.each((index:number,element:any)=>{
    $(element).find("a").each((index:number,element:any)=>{
     tema.push($(element).text())
    })
  }) 
  
  const judulAlternatif: string = clear($(wraperDetails).find("span").eq(0).text())
  const status: string =clear($(wraperDetails).find("span").eq(1).text())
  const pengarang: string = clear($(wraperDetails).find("span").eq(2).find("a").text())
  const ilustrator: string = clear($(wraperDetails).find("span").eq(3).find("a").text())
  const grafis: string = clear($(wraperDetails).find("span").eq(4).find("a").text())
  const jenis: string = clear($(wraperDetails).find("span").eq(6).find("a").text())
  const jumlahPembaca: string = clear($(wraperDetails).find("span").eq(9).text())
  const genre: string[]= []
  $(container).find(".genre-info > a").each((index:number,element:any):void=>{
      genre.push($(element).text())
    })
  const penjelasanSingkat = clear($(container).find(".shortcsc > p").text()).replace("/","")
  
  const sinopsis = clear($(container).find("#sinopsis").find("p").text())
  const lastChapter = clear($(container).find("#chapter_list").find("chapter").eq(0).text())
  const details: DetailKomik = {
    judulAlternatif,
    status,
    pengarang,
    ilustrator,
    grafis,
    jenis,
    tema,
    jumlahPembaca,
    genre,
    penjelasanSingkat
  }
  
  const data: InfoKomik = {
    title,
    cover,
    baner,
    headerText, 
    chapter,
    rating,
    votesCount,
    details,
    sinopsis,
    lastChapter
  }
 
  res.status(200).json({
    status:true,
    data,
    statusCode:200,
    message:"Get Komik detail"
  })
}
export const getAllKomikByType = async (req:Request,res:Response)=>{
  const data :any[] = []
  const $ = await fetcher(`${BASE_URL}/baca-${req.params.type}/page/${req.query.page || 1}/`)
  
  const container = $("#content > .postbody > .whites")
  const totalPage = $(".pagination > .page-numbers").eq(4).text()
  const listContent = $(container).find(".listupd")
  listContent.each((i:number, elem: any) => {
     const animePosts = $(elem).find(".animepost");

    animePosts.each((i:number, elem:any) => {
      const title = $(elem).find(".bigor > a > .tt > h4").text().trim()
      const baner = $(elem).find("a > .limit > img").attr("src")
      const totalChapter = $(elem).find(' .adds > .lsch > a').text()
      const lastUpdate = $(elem).find('.adds > .lsch > .datech').text().trim()
      data.push({ title ,baner,totalChapter,lastUpdate});

    });
    });
  
  res.status(200).json({
    status:true,
    data:{
      result:data,
      totalPage
    },
    statusCode:200,
    message:"Get all new Komik"
  })
}

export const searchKomik = async(req:Request,res:Response)=>{
  const data :any[] = []
  let search = req.query.s

  const $ = await fetcher(`${BASE_URL}/?s=${search}`)
  const container = $(".postbody")
  console.log($(container).html())
  
  const komikList = $(container).find(".film-list > .animepost > .animposx")
  komikList.each((index:number,element:any)=>{
      const title = $(element).find(".bigors > a > .tt > h4").text().trim()
      const baner = $(element).find("a > .limit > img").attr("src")
      const rating = $(element).find(".bigors > .adds > .rating > i").text().trim()
      data.push({title,baner,rating})
    })
  res.status(200).json({
    status:true,
    data:{
      result:data
    },
    statusCode:200,
    message:"Search Komik"
  })
}